/**
 * Spring Physics Animation
 */
class Spring {
  constructor(config = {}) {
    this.mass = config.mass || 0.1;
    this.stiffness = config.stiffness || 150;
    this.damping = config.damping || 12;
    this.value = 0;
    this.target = 0;
    this.velocity = 0;
  }

  update(deltaTime) {
    const dt = Math.min(deltaTime, 0.064); // Cap at ~60fps
    
    // Spring force: F = -k * x
    const springForce = -this.stiffness * (this.value - this.target);
    
    // Damping force: F = -c * v
    const dampingForce = -this.damping * this.velocity;
    
    // F = ma, therefore a = F/m
    const acceleration = (springForce + dampingForce) / this.mass;
    
    // Update velocity and value
    this.velocity += acceleration * dt;
    this.value += this.velocity * dt;
    
    return this.value;
  }

  setTarget(target) {
    this.target = target;
  }

  setValue(value) {
    this.value = value;
    this.velocity = 0;
  }

  isAtRest() {
    const distance = Math.abs(this.value - this.target);
    const speed = Math.abs(this.velocity);
    return distance < 0.01 && speed < 0.01;
  }
}

/**
 * Dock Item Component
 */
class DockItem {
  constructor(config, globalConfig) {
    this.config = config;
    this.globalConfig = globalConfig;
    this.element = null;
    this.iconElement = null;
    this.labelElement = null;
    this.sizeSpring = new Spring(globalConfig.spring);
    this.currentSize = globalConfig.baseItemSize;
    
    this.createElements();
  }

  createElements() {
    // Create main item element
    this.element = document.createElement('div');
    this.element.className = `dock-item ${this.config.className || ''}`;
    this.element.tabIndex = 0;
    this.element.role = 'button';
    this.element.setAttribute('aria-label', this.config.label);
    
    // Create icon element
    this.iconElement = document.createElement('div');
    this.iconElement.className = 'dock-icon';
    this.iconElement.innerHTML = this.config.icon;
    
    // Create label element
    this.labelElement = document.createElement('div');
    this.labelElement.className = 'dock-label';
    this.labelElement.textContent = this.config.label;
    
    // Append elements
    this.element.appendChild(this.iconElement);
    this.element.appendChild(this.labelElement);
    
    // Add click handler
    if (this.config.onClick) {
      this.element.addEventListener('click', this.config.onClick);
    }
    
    // Set initial size
    this.sizeSpring.setValue(this.globalConfig.baseItemSize);
    this.updateSize(this.globalConfig.baseItemSize);
  }

  updateSize(size) {
    this.currentSize = size;
    this.element.style.width = `${size}px`;
    this.element.style.height = `${size}px`;
  }

  calculateTargetSize(mouseY) {
    if (mouseY === Infinity) {
      return this.globalConfig.baseItemSize;
    }

    const rect = this.element.getBoundingClientRect();
    const itemCenterY = rect.top + rect.height / 2;
    const distance = Math.abs(mouseY - itemCenterY);

    if (distance > this.globalConfig.distance) {
      return this.globalConfig.baseItemSize;
    }

    // Calculate size based on distance using inverse relationship
    const proximity = 1 - (distance / this.globalConfig.distance);
    const sizeIncrease = (this.globalConfig.magnification - this.globalConfig.baseItemSize) * proximity;
    
    return this.globalConfig.baseItemSize + sizeIncrease;
  }

  animate(mouseY, deltaTime) {
    const targetSize = this.calculateTargetSize(mouseY);
    this.sizeSpring.setTarget(targetSize);
    const newSize = this.sizeSpring.update(deltaTime);
    this.updateSize(newSize);
    
    return !this.sizeSpring.isAtRest();
  }

  destroy() {
    if (this.config.onClick) {
      this.element.removeEventListener('click', this.config.onClick);
    }
    this.element.remove();
  }
}

/**
 * Main Dock Component
 */
class Dock {
  constructor(container, config = {}) {
    this.container = typeof container === 'string' 
      ? document.querySelector(container) 
      : container;
    
    if (!this.container) {
      throw new Error('Dock container not found');
    }

    this.config = {
      items: config.items || [],
      spring: config.spring || { mass: 0.1, stiffness: 150, damping: 12 },
      magnification: config.magnification || 70,
      distance: config.distance || 200,
      panelHeight: config.panelHeight || 68,
      dockHeight: config.dockHeight || 256,
      baseItemSize: config.baseItemSize || 50,
      ...config
    };

    this.mouseY = Infinity;
    this.isHovered = false;
    this.dockItems = [];
    this.outerElement = null;
    this.panelElement = null;
    this.rafId = null;
    this.lastTime = performance.now();

    this.init();
  }

  init() {
    this.createElements();
    this.createDockItems();
    this.bindEvents();
    this.startAnimation();
  }

  createElements() {
    // Create outer container
    this.outerElement = document.createElement('div');
    this.outerElement.className = 'dock-outer';
    this.outerElement.style.height = `${this.config.panelHeight}px`;

    // Create panel
    this.panelElement = document.createElement('div');
    this.panelElement.className = 'dock-panel';
    this.panelElement.setAttribute('role', 'toolbar');
    this.panelElement.setAttribute('aria-label', 'Application dock');

    this.outerElement.appendChild(this.panelElement);
    this.container.appendChild(this.outerElement);
  }

  createDockItems() {
    this.config.items.forEach(itemConfig => {
      const dockItem = new DockItem(itemConfig, this.config);
      this.dockItems.push(dockItem);
      this.panelElement.appendChild(dockItem.element);
    });
  }

  bindEvents() {
    this.handleMouseMove = this.onMouseMove.bind(this);
    this.handleMouseLeave = this.onMouseLeave.bind(this);
    this.handleMouseEnter = this.onMouseEnter.bind(this);

    this.panelElement.addEventListener('mousemove', this.handleMouseMove);
    this.panelElement.addEventListener('mouseleave', this.handleMouseLeave);
    this.panelElement.addEventListener('mouseenter', this.handleMouseEnter);
  }

  onMouseMove(event) {
    this.mouseY = event.clientY;
    this.isHovered = true;
  }

  onMouseLeave() {
    this.mouseY = Infinity;
    this.isHovered = false;
  }

  onMouseEnter() {
    this.isHovered = true;
  }

  animate() {
    const currentTime = performance.now();
    const deltaTime = (currentTime - this.lastTime) / 1000; // Convert to seconds
    this.lastTime = currentTime;

    let needsUpdate = false;

    // Animate all dock items
    this.dockItems.forEach(item => {
      const itemNeedsUpdate = item.animate(this.mouseY, deltaTime);
      needsUpdate = needsUpdate || itemNeedsUpdate;
    });

    // Update outer container height with smooth transition
    const maxHeight = Math.max(
      this.config.dockHeight,
      this.config.magnification + this.config.magnification / 2 + 4
    );
    
    const targetHeight = this.isHovered ? maxHeight : this.config.panelHeight;
    const currentHeight = parseFloat(this.outerElement.style.height) || this.config.panelHeight;
    
    if (Math.abs(currentHeight - targetHeight) > 0.5) {
      const heightDelta = (targetHeight - currentHeight) * 0.15; // Smooth interpolation
      this.outerElement.style.height = `${currentHeight + heightDelta}px`;
      needsUpdate = true;
    }

    // Continue animation loop if needed
    if (needsUpdate || this.isHovered || this.mouseY !== Infinity) {
      this.rafId = requestAnimationFrame(() => this.animate());
    } else {
      this.rafId = null;
    }
  }

  startAnimation() {
    if (!this.rafId) {
      this.lastTime = performance.now();
      this.rafId = requestAnimationFrame(() => this.animate());
    }
  }

  stopAnimation() {
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
  }

  updateItems(newItems) {
    // Clear existing items
    this.dockItems.forEach(item => item.destroy());
    this.dockItems = [];
    this.panelElement.innerHTML = '';

    // Create new items
    this.config.items = newItems;
    this.createDockItems();
  }

  destroy() {
    this.stopAnimation();
    
    this.panelElement.removeEventListener('mousemove', this.handleMouseMove);
    this.panelElement.removeEventListener('mouseleave', this.handleMouseLeave);
    this.panelElement.removeEventListener('mouseenter', this.handleMouseEnter);

    this.dockItems.forEach(item => item.destroy());
    this.dockItems = [];

    this.outerElement.remove();
  }
}

// Export for use in modules (optional)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Dock;
}
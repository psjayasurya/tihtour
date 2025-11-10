let projectDataByScene = {};

// Load project data
fetch("static/projects.json")
  .then(res => res.json())
  .then(data => { projectDataByScene = data; })
  .catch(err => console.error("Failed to load project data:", err));

// Load hotspots
fetch('static/hotspots.json')
  .then(res => res.json())
  .then(data => {
    data.forEach(hotspotData => {
      // Create hotspot
      const hotspot = document.createElement('div');
      hotspot.className = 'external-hotspot';
      hotspot.setAttribute('data-yaw', hotspotData.yaw);
      hotspot.setAttribute('data-pitch', hotspotData.pitch);
      hotspot.setAttribute('data-scene', hotspotData.scene);

      // Create button inside hotspot
      const button = document.createElement('div');
      button.className = 'project-button';

      const span = document.createElement('span');
      span.textContent = hotspotData.label;

      const hand = document.createElement('div');
      hand.className = 'hand-anim';
      hand.textContent = '🤚';

      button.appendChild(span);
      button.appendChild(hand);
      hotspot.appendChild(button);

      // Attach click listener
      button.addEventListener('click', (e) => {
        e.stopPropagation();
        openProjectPopup(hotspotData.scene);
      });

      // Append to body (or panorama container)
      document.body.appendChild(hotspot);
    });

    // Show initial scene
    attachHtmlHotspots('0-geo-intel');
  })
  .catch(err => console.error('Error loading hotspots.json:', err));

// Show only hotspots for active scene
function attachHtmlHotspots(sceneId) {
  document.querySelectorAll('.external-hotspot').forEach(el => {
    el.style.display = el.dataset.scene === sceneId ? 'block' : 'none';
  });
}

// ========== Popup Logic ==========
const popup = document.getElementById('projectPopup');
const popupBody = document.getElementById('popupBody');
const closePopupBtn = document.getElementById('closePopup');

function openProjectPopup(sceneId) {
  popupBody.innerHTML = '';
  const projects = projectDataByScene[sceneId] || [];

  if (projects.length === 0) {
    popupBody.innerHTML = '<p>No project data found for this room.</p>';
  } else {
    projects.forEach(proj => {
      const p = document.createElement('p');
      p.innerHTML =  `<bold>${proj.title}:</bold> ${proj.description}`;
      popupBody.appendChild(p);

      if(proj.image){
        const img = document.createElement('img');
        img.src = proj.image;
        img.alt = proj.title;
        img.classList.add('popup-image');
        popupBody.appendChild(img);
      }
    });
  }

  popup.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

closePopupBtn.addEventListener('click', () => {
  popup.style.display = 'none';
  document.body.style.overflow = '';
});
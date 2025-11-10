from flask import Blueprint, request, jsonify, render_template,redirect, url_for, session
from flask_cors import CORS
from flask_bcrypt import Bcrypt
from flask_mail import Mail, Message
from itsdangerous import URLSafeTimedSerializer
from dotenv import load_dotenv
import os


from auth.models.user import create_user, get_user_by_email, verify_user_email

# Load .env inside auth
load_dotenv()

# Define blueprint
auth_bp = Blueprint("auth", __name__, template_folder="templates")

# Extensions (not bound yet)
bcrypt = Bcrypt()
mail = Mail()
CORS(auth_bp)   # CORS can be attached to blueprint

# Blueprint setup when registered with app
@auth_bp.record_once
def on_load(state):
    app = state.app   # the real Flask app

    # Inject configs from .env
    app.config['SECRET_KEY'] = os.getenv('FLASK_SECRET_KEY')
    app.config['MAIL_SERVER'] = os.getenv('MAIL_SERVER')
    app.config['MAIL_PORT'] = int(os.getenv('MAIL_PORT'))
    app.config['MAIL_USE_TLS'] = os.getenv('MAIL_USE_TLS') == 'True'
    app.config['MAIL_USERNAME'] = os.getenv('MAIL_USERNAME')
    app.config['MAIL_PASSWORD'] = os.getenv('MAIL_PASSWORD')

    # Init extensions
    bcrypt.init_app(app)
    mail.init_app(app)


# ---------------- Routes ----------------

@auth_bp.route('/')
def index():
    return render_template('login.html')

@auth_bp.route('/sign_up')
def sign_up_page():
    return render_template('sign_up.html')

@auth_bp.route('/login_page')
def login_page():
    return render_template('login.html')


# Signup Route
@auth_bp.route('/signup', methods=['POST'])
def signup():
    data = request.json
    email = data['email']
    password = data['password']

    if not (email.endswith('@gmail.com') or email.endswith('@iittnif.com')):
        return jsonify({'error': 'Only @gmail.com and @iittnif.com domains allowed'}), 400

    if get_user_by_email(email):
        return jsonify({'error': 'User already exists'}), 400

    pw_hash = bcrypt.generate_password_hash(password).decode('utf-8')
    create_user(email, pw_hash)

    s = URLSafeTimedSerializer(os.getenv('FLASK_SECRET_KEY'))
    token = s.dumps(email, salt='email-verify')
    link = f" http://10.26.90.239:5005/auth/verify/{token}"

    msg = Message('Verify your email',
                  sender=os.getenv('MAIL_USERNAME'),
                  recipients=[email])
    msg.body = f'Click to verify: {link}'
    mail.send(msg)

    return jsonify({'message': 'Verification link sent to email'})


# Email Verification Route
@auth_bp.route('/verify/<token>')
def verify_email(token):
    try:
        s = URLSafeTimedSerializer(os.getenv('FLASK_SECRET_KEY'))
        email = s.loads(token, salt='email-verify', max_age=3600)
        verify_user_email(email)
        return "Email verified successfully! You can now log in."
    except Exception:
        return "Invalid or expired token", 400


# Login Route
@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.json
    email = data['email']
    password = data['password']

    user = get_user_by_email(email)
    if not user:
        return jsonify({'error': 'User not found'}), 401

    # Ensure DB returns correct tuple format
    user_id, user_email, user_password, reset_token, is_verified = user

    if not is_verified:
        return jsonify({'error': 'Email not verified'}), 403

    if not bcrypt.check_password_hash(user_password, password):
        return jsonify({'error': 'Invalid password'}), 401
    session["user_id"] = 1 

    return jsonify({'success': True, 'redirect': '/admin2', 'message': 'Login successful'})

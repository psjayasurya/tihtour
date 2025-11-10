from flask import Flask , render_template
from dataserver.routes import datajs
from admin2.routes import app1
from auth.routes import auth_bp



from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)



# Register all blueprints with URL prefixes
app.register_blueprint(datajs, url_prefix="/dataserver")
app.register_blueprint(app1, url_prefix="/admin2")
app.register_blueprint(auth_bp, url_prefix="/auth")

@app.route('/')
def index():
    return render_template('index.html')
if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5005)



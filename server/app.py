import os
from flask import Flask, request, redirect, url_for, render_template
from werkzeug.utils import secure_filename
from models import db, Resume

UPLOAD_FOLDER = 'uploads/'
ALLOWED_EXTENSIONS = {'pdf', 'docx'}

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
#app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///instance/resumes.db'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///resumes.db'
from flask_migrate import Migrate

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)
migrate = Migrate(app, db)

with app.app_context():
    db.create_all()

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/')
def upload_form():
    return render_template('upload.html')

@app.route('/api/upload', methods=['POST'])
def upload_file():
    if 'resume' not in request.files:
        return {"error": "No file uploaded"}, 400

    file = request.files['resume']
    if file.filename == '':
        return {"error": "Empty file name"}, 400

    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)

        # Check if resume with the same filename already exists
        existing_resume = Resume.query.filter_by(filename=filename).first()
        
        if existing_resume:
            # Update existing resume
            existing_resume.filepath = filepath
        else:
            # Create new resume entry
            existing_resume = Resume(filename=filename, filepath=filepath)
            db.session.add(existing_resume)

        # Save file and commit changes
        file.save(filepath)
        db.session.commit()

        # Simulated ATS score (Replace with actual scoring logic)
        ats_score = 75  

        return {"message": "Upload successful", "atsScore": ats_score}, 200
    else:
        return {"error": "Invalid file type"}, 400

    
@app.route('/api/resumes', methods=['GET'])
def get_resumes():
    resumes = Resume.query.all()
    resume_list = [{"id": r.id, "filename": r.filename, "filepath": r.filepath} for r in resumes]
    return resume_list, 200



if __name__ == '__main__':
    app.run(debug=True)

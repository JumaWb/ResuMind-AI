from app import app
from models import db, Resume

with app.app_context():
    try:
        # Delete existing data
        db.session.query(Resume).delete()

        # Add new seed data
        resume1 = Resume(filename='resume1.pdf', filepath='uploads/resume1.pdf')
        resume2 = Resume(filename='resume2.docx', filepath='uploads/resume2.docx')

        db.session.add_all([resume1, resume2])
        db.session.commit()
        print("✅ Database seeded successfully!")

    except Exception as e:
        db.session.rollback()
        print(f"❌ Error seeding database: {e}")

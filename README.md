# ResuMind AI

ResuMind AI is an AI-powered resume analyzer that helps job seekers optimize their resumes based on job descriptions. The tool evaluates resumes, provides feedback, and scores them based on relevance.

## 🚀 Features
- 📝 Upload resumes (PDF/DOCX)
- 🤖 AI-powered resume analysis
- 📊 Resume scoring based on job descriptions
- 📢 Actionable feedback for improvement
- 🎨 User-friendly UI with Tailwind CSS

## 🏗 Project Structure

### **Backend (Flask)**
```
backend/
│── app.py                # Main Flask app
│── models.py             # Database models
│── routes.py             # API routes
│── services.py           # Resume analysis logic
│── utils.py              # Helper functions
│── requirements.txt      # Backend dependencies
│── config.py             # Configuration settings
│── database.db           # SQLite database (if applicable)
```

### **Frontend (React + Tailwind CSS)**
```
frontend/
│── src/
│   ├── components/       # Reusable UI components
│   ├── pages/            # Main pages (Home, Upload, Results)
│   ├── services/         # API calls to Flask backend
│   ├── styles/           # Tailwind CSS custom styles
│   ├── App.jsx           # Main app component
│   ├── index.jsx         # Entry point
│── package.json          # Dependencies
│── tailwind.config.js    # Tailwind configuration
│── postcss.config.js     # PostCSS configuration
```

## ⚙️ Installation & Setup

### **Backend (Flask)**
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/ResuMind-AI.git
   cd ResuMind-AI/backend
   ```
2. Create a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate   # On Windows use 'venv\Scripts\activate'
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Run the Flask backend:
   ```bash
   python app.py
   ```

### **Frontend (React + Tailwind CSS)**
1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React app:
   ```bash
   npm start
   ```

## 🔗 API Endpoints (Flask)
| Method | Endpoint       | Description               |
|--------|---------------|---------------------------|
| POST   | /upload       | Upload resume for analysis |
| GET    | /results      | Get resume analysis results |

## 🎨 UI/UX Flow
1. **Home Page** → Upload resume
2. **Upload Page** → Submit resume for analysis
3. **Results Page** → View resume score & feedback

## 🛠 Technologies Used
- **Backend:** Flask, Flask-RESTful, SQLAlchemy
- **Frontend:** React, Tailwind CSS
- **Database:** PostgreSQL / SQLite
- **AI:** NLP-based resume parsing (TBD)

# Hackathon Notes Taker App

## Waterloo CxC Hackathon 2025 Workshop - Using Ollama to run an LLM locally

### Project Description

This project is a simple boiler plate application that connects a simple Fast API backend to a simple React frontend. The app is a hackathon notes enhancer, it allows users to record hackathon notes and has an LLM enhance these notes and fill in some gaps.

Refer to this video for how to install Ollama and an LLM locally on your computer:
https://www.youtube.com/watch?v=UtSSMs6ObqY

## Setup Instructions

### Backend Setup (Python 3.11+ required)

Create a `.env` file in the `backend` directory and copy the contents of `backend/.env.example` to the file, replacing the sample values with your desired values

Start the app using the following commands

```bash
cd backend
# Create and activate virtual environment
python -m venv cxc_2025_venv
source cxc_2025_venv/bin/activate  # or `venv\Scripts\activate` on Windows

# Install dependencies
pip install -r requirements.txt

# Start the server
fastapi dev main.py
```

### Frontend Setup (Node.js 18+ required)

Create a `.env` file in the `frontend` directory and copy the contents of `frontend/.env.example` to the file, replacing the sample values with your desired values

Start the app using the following ocmmands

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will be available at:

- Frontend: http://localhost:5173
- Backend API: http://localhost:8000
- API Documentation: http://localhost:8000/docs

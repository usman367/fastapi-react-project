### Project Setup
- mkdir backend frontend

## Backend
- cd backend
- python -m venv venv
- venv\Scripts\activate
- pip install fastapi uvicorn
- pip freeze > requirements.txt

## Run backend
- cd backend
- uvicorn main:app --reload


## Frontend
- cd frontend
- npx create-react-app .
- npm install axios
- npm install web-vitals

## Run Frontend
- cd frontend
- npm start


## Create gitgnore file
- .gitignore
- Contents:
# Python
backend/venv/
backend/__pycache__/

# Node.js
- frontend/node_modules/
- frontend/.env



## Push to GitLab

## Backend setup after cloning
- cd backend
- python -m venv venv
- venv\Scripts\activate
- pip install -r requirements.txt
- uvicorn main:app --reload

## Frontend setup after clonig
- cd frontend
- npm install
- npm start
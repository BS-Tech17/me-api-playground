# Me-API Playground

## Architecture
- **Backend**: FastAPI (Python) with PostGRESQL. Single `profile` table storing JSON strings for arrays/objects.
- **Frontend**: HTML/CSS/JS, fetching API via `fetch()`.
- **Data Flow**: Frontend calls backend API, which queries PostGRESQL DB.
  
### Setup (Local)
1. Clone: `git clone https://github.com/BS-Tech17/api-playground`
2. Backend:
   - `cd api-playground`
   - `python -m venv venv`
   - `venv\Scripts\activate`
   - `pip install fastapi uvicorn sqlalchemy`
   - `python backend/init_db.py`
   - `uvicorn backend.app:app --reload`
3. Frontend: `python -m http.server 8080 --directory frontend`

## Setup (Production)
- **Backend**:
  - New Web Service, link to `https://github.com/BS-Tech17/api-playground`.
  - Runtime: Python.
  - Build command: `pip install -r backend/requirements.txt && python backend/init_db.py`.
  - Start command: `uvicorn backend.app:app --host 0.0.0.0 --port $PORT`.
- Deployed on render.com :(backend with mounted frontend)
 - URL: https://me-api-playground-w35g.onrender.com/ .

## Schema
See `backend\schema.sql`. Single `profile` table with `id`, `name`, `email`, `education`, `skills`, `projects`, `work`, `links`. No indexes (single row).

## Sample CURL/Postman
- Health: `curl http://localhost:8000/health`
- Profile: `curl http://localhost:8000/profile`
- Projects by skill: `curl http://localhost:8000/projects?skill=python`
- Top skills: `curl http://localhost:8000/skills/top`
- Search: `curl http://localhost:8000/search?q=AI`
- Update profile: `curl -X PUT http://localhost:8000/profile -H "Content-Type: application/json" -d '{"name":"New Name","email":"new@example.com","education":"Updated","skills":["Python"],"projects":[],"work":[],"links":{}}'`

## Known Limitations
- Single profile (id=1).
- Search: Basic string matching, no fuzzy logic.
- No authentication or input validation.
- Top skills: Alphabetical sort; could use project frequency.
- SQLite: Not production-scale; consider PostgreSQL for scaling.

## Resume  Link
https://drive.google.com/file/d/1M7GTRVJCaVl7E8vFQJ8DAuw1i2qxAzMi/view?usp=drive_link 
 

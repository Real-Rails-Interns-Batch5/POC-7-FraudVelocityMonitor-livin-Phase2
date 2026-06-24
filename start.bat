@echo off
REM Real Rails Fraud Velocity Monitor - Windows Startup Script

setlocal enabledelayedexpansion

echo.
echo 🚀 Fraud Velocity Monitor - Startup Script
echo ==========================================
echo.

REM Check if backend directory exists
if not exist "backend" (
    echo ❌ Backend directory not found!
    pause
    exit /b 1
)

REM Check if frontend directory exists
if not exist "frontend" (
    echo ❌ Frontend directory not found!
    pause
    exit /b 1
)

REM Start Backend
echo 📡 Starting FastAPI Backend...
cd backend

REM Check if Python venv exists
if not exist "venv" (
    echo Creating Python virtual environment...
    python -m venv venv
)

REM Activate venv and install dependencies
call venv\Scripts\activate.bat
echo Installing backend dependencies...
pip install -q -r requirements.txt

REM Start backend server in new window
start "Fraud Velocity Monitor - Backend" cmd /k "uvicorn app:app --host 0.0.0.0 --port 8000 --reload"
echo ✅ Backend started

cd ..

timeout /t 2 /nobreak

REM Start Frontend
echo.
echo ⚡ Starting Next.js Frontend...
cd frontend

REM Check if node_modules exists
if not exist "node_modules" (
    echo Installing frontend dependencies...
    call npm install -q
)

REM Start frontend dev server in new window
start "Fraud Velocity Monitor - Frontend" cmd /k "npm run dev"
echo ✅ Frontend started

cd ..

echo.
echo ==========================================
echo 🎉 Both services are running!
echo.
echo 📍 Frontend: http://localhost:3000
echo 📍 Backend: http://localhost:8000
echo 📍 API Docs: http://localhost:8000/docs
echo.
echo Close the command windows to stop services
echo ==========================================
echo.

pause

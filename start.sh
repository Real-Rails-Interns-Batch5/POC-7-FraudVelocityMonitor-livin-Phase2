#!/bin/bash

# Real Rails Fraud Velocity Monitor - Startup Script

echo "🚀 Fraud Velocity Monitor - Startup Script"
echo "=========================================="
echo ""

# Check if backend directory exists
if [ ! -d "backend" ]; then
    echo "❌ Backend directory not found!"
    exit 1
fi

# Check if frontend directory exists
if [ ! -d "frontend" ]; then
    echo "❌ Frontend directory not found!"
    exit 1
fi

# Start Backend
echo "📡 Starting FastAPI Backend..."
cd backend

# Check if Python venv exists
if [ ! -d "venv" ]; then
    echo "Creating Python virtual environment..."
    python -m venv venv
fi

# Activate venv
source venv/Scripts/activate 2>/dev/null || source venv/bin/activate

# Install/update dependencies
echo "Installing backend dependencies..."
pip install -q -r requirements.txt

# Start backend server
uvicorn app:app --host 0.0.0.0 --port 8000 --reload &
BACKEND_PID=$!
echo "✅ Backend started (PID: $BACKEND_PID)"

cd ..

# Start Frontend
echo ""
echo "⚡ Starting Next.js Frontend..."
cd frontend

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "Installing frontend dependencies..."
    npm install -q
fi

# Start frontend dev server
npm run dev &
FRONTEND_PID=$!
echo "✅ Frontend started (PID: $FRONTEND_PID)"

cd ..

echo ""
echo "=========================================="
echo "🎉 Both services are running!"
echo ""
echo "📍 Frontend: http://localhost:3000"
echo "📍 Backend: http://localhost:8000"
echo "📍 API Docs: http://localhost:8000/docs"
echo ""
echo "Press Ctrl+C to stop all services"
echo "=========================================="

# Wait for both processes
wait $BACKEND_PID $FRONTEND_PID

from fastapi import FastAPI, Query, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from pydantic import BaseModel
from typing import List, Optional
import json
from datetime import datetime, timedelta
import os

# Initialize FastAPI app
app = FastAPI(
    title="Fraud Velocity Monitor API",
    description="Real-time fraud detection and velocity monitoring backend",
    version="1.0.0"
)

# Enable CORS for frontend communication
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:3001", "*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ==================== SCHEMAS ====================

class FraudEvent(BaseModel):
    id: str
    timestamp: str
    merchant_id: str
    merchant_name: str
    transaction_amount: float
    transaction_currency: str
    cardholder_country: str
    merchant_country: str
    card_last_4: str
    risk_score: int
    risk_level: str
    velocity_flag: str
    device_fingerprint: str
    ip_address: str
    anomaly_type: str
    mcc_category: str
    status: str
    region: str
    lat: float
    lon: float

class Analytics(BaseModel):
    total_transactions_24h: int
    flagged_transactions: int
    blocked_transactions: int
    fraud_rate_percent: float
    avg_risk_score: float
    high_risk_count: int
    regions_affected: int
    top_attack_vector: str
    top_mcc_targeted: str

class RiskScoreTrend(BaseModel):
    timestamp: str
    avg_score: float
    high_risk_count: int

class VelocityRule(BaseModel):
    rule_id: str
    name: str
    threshold: int
    window_minutes: int
    severity: str
    active: bool
    violation_count_24h: int

class ReviewQueueItem(BaseModel):
    review_id: str
    event_id: str
    merchant_name: str
    risk_score: int
    reason: str
    queued_at: str
    priority: str
    status: str

# ==================== MOCK DATA LOADER ====================

def load_mock_data():
    """Load mock data from JSON file"""
    try:
        mock_file_path = os.path.join(os.path.dirname(__file__), "mock_data.json")
        with open(mock_file_path, "r") as f:
            return json.load(f)
    except Exception as e:
        print(f"Error loading mock data: {e}")
        return None

MOCK_DATA = load_mock_data()

# ==================== ENDPOINTS ====================

@app.get("/health", tags=["Health"])
async def health_check():
    """Health check endpoint"""
    return {
        "status": "ok",
        "service": "Fraud Velocity Monitor API",
        "timestamp": datetime.utcnow().isoformat()
    }

@app.get("/api/fraud-events", response_model=List[FraudEvent], tags=["Fraud Events"])
async def get_fraud_events(
    risk_level: Optional[str] = Query(None, description="Filter by risk level: LOW, MEDIUM, HIGH"),
    status: Optional[str] = Query(None, description="Filter by status: APPROVED, FLAGGED, BLOCKED, UNDER_REVIEW"),
    limit: int = Query(50, ge=1, le=500),
    offset: int = Query(0, ge=0)
):
    """
    Retrieve fraud events with optional filtering.
    
    **Filters:**
    - `risk_level`: LOW, MEDIUM, HIGH
    - `status`: APPROVED, FLAGGED, BLOCKED, UNDER_REVIEW
    """
    if not MOCK_DATA:
        raise HTTPException(status_code=500, detail="Mock data unavailable")
    
    events = MOCK_DATA.get("fraud_events", [])
    
    # Apply filters
    if risk_level:
        events = [e for e in events if e.get("risk_level") == risk_level]
    if status:
        events = [e for e in events if e.get("status") == status]
    
    # Pagination
    paginated = events[offset:offset + limit]
    
    return paginated

@app.get("/api/fraud-events/{event_id}", response_model=FraudEvent, tags=["Fraud Events"])
async def get_fraud_event(event_id: str):
    """Retrieve a specific fraud event by ID"""
    if not MOCK_DATA:
        raise HTTPException(status_code=500, detail="Mock data unavailable")
    
    events = MOCK_DATA.get("fraud_events", [])
    event = next((e for e in events if e.get("id") == event_id), None)
    
    if not event:
        raise HTTPException(status_code=404, detail=f"Event {event_id} not found")
    
    return event

@app.get("/api/analytics", response_model=Analytics, tags=["Analytics"])
async def get_analytics():
    """Retrieve high-level fraud analytics for the dashboard"""
    if not MOCK_DATA:
        raise HTTPException(status_code=500, detail="Mock data unavailable")
    
    analytics = MOCK_DATA.get("analytics", {})
    return analytics

@app.get("/api/risk-score-trend", response_model=List[RiskScoreTrend], tags=["Analytics"])
async def get_risk_score_trend():
    """Retrieve risk score trend data for chart visualization"""
    if not MOCK_DATA:
        raise HTTPException(status_code=500, detail="Mock data unavailable")
    
    trend = MOCK_DATA.get("risk_score_trend", [])
    return trend

@app.get("/api/velocity-rules", response_model=List[VelocityRule], tags=["Rules"])
async def get_velocity_rules(active_only: bool = Query(False)):
    """Retrieve velocity detection rules"""
    if not MOCK_DATA:
        raise HTTPException(status_code=500, detail="Mock data unavailable")
    
    rules = MOCK_DATA.get("velocity_rules", [])
    
    if active_only:
        rules = [r for r in rules if r.get("active", False)]
    
    return rules

@app.get("/api/review-queue", response_model=List[ReviewQueueItem], tags=["Review Queue"])
async def get_review_queue(
    priority: Optional[str] = Query(None, description="Filter by priority: LOW, MEDIUM, HIGH, CRITICAL"),
    status: Optional[str] = Query(None, description="Filter by status: PENDING_REVIEW, UNDER_INVESTIGATION, RESOLVED")
):
    """Retrieve fraud review queue"""
    if not MOCK_DATA:
        raise HTTPException(status_code=500, detail="Mock data unavailable")
    
    queue = MOCK_DATA.get("review_queue", [])
    
    if priority:
        queue = [q for q in queue if q.get("priority") == priority]
    if status:
        queue = [q for q in queue if q.get("status") == status]
    
    return queue

@app.post("/api/fraud-events/{event_id}/approve", tags=["Actions"])
async def approve_fraud_event(event_id: str):
    """Mark a fraud event as approved"""
    return {
        "success": True,
        "message": f"Event {event_id} approved",
        "timestamp": datetime.utcnow().isoformat()
    }

@app.post("/api/fraud-events/{event_id}/block", tags=["Actions"])
async def block_fraud_event(event_id: str):
    """Mark a fraud event as blocked"""
    return {
        "success": True,
        "message": f"Event {event_id} blocked",
        "timestamp": datetime.utcnow().isoformat()
    }

@app.get("/api/sample-data", tags=["Data"])
async def download_sample_data():
    """Download mock data as sample dataset"""
    if not MOCK_DATA:
        raise HTTPException(status_code=500, detail="Mock data unavailable")
    
    return MOCK_DATA

@app.get("/", tags=["Root"])
async def root():
    """Root endpoint with API documentation"""
    return {
        "name": "Fraud Velocity Monitor API",
        "version": "1.0.0",
        "status": "running",
        "docs": "/docs",
        "redoc": "/redoc"
    }

# ==================== ENTRY POINT ====================

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(
        "app:app",
        host="0.0.0.0",
        port=8000,
        reload=True
    )

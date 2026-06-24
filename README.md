# Fraud Velocity Monitor - Real Rails Intelligence Library

Production-style demo application for fraud detection and velocity monitoring in payment systems.

## 📋 Project Overview

**Project ID:** Fraud Velocity Monitor  
**Rail Category:** Payments  
**Data Sources:** CFPB, FRED (with synthetic mock data for event-level feeds)  
**Purpose:** Real-time fraud detection, velocity rule monitoring, and anomaly alerting

## 🏗️ Architecture

### Backend (FastAPI)
- **Location:** `/backend`
- **Port:** `8000`
- **Key Endpoints:**
  - `GET /api/fraud-events` - Retrieve fraud transaction events
  - `GET /api/analytics` - High-level metrics dashboard
  - `GET /api/risk-score-trend` - Risk score time series
  - `GET /api/velocity-rules` - Active velocity detection rules
  - `GET /api/review-queue` - Items pending human review
  - `POST /api/fraud-events/{id}/approve` - Approve transaction
  - `POST /api/fraud-events/{id}/block` - Block transaction
  - `GET /api/sample-data` - Download mock dataset

### Frontend (Next.js 14+)
- **Location:** `/frontend`
- **Port:** `3000`
- **Stack:** React, TypeScript, Tailwind CSS, Recharts
- **Design:** 2-Column Layout (70% Main Stage + 30% Intelligence Sidebar)

## 🎨 Visual Identity

**Color Palette (Real Rails DNA):**
- Background: `#030712` (Obsidian Black) — MANDATORY
- Surface/Cards: `#0B1117` (Deep Navy Grey)
- Accent Primary: `#38BDF8` (Electric Cyan)
- Accent Secondary: `#818CF8` (Indigo)
- Borders: `#1F2937` (Slate-800), 1px width

**Style:** Subtle glassmorphism on cards; 0.5px cyan glow on active elements

## 🚀 Quick Start

### Backend Setup

```bash
cd backend
python -m venv venv
source venv/Scripts/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
python app.py
```

Backend will run on `http://localhost:8000`

**API Docs:** http://localhost:8000/docs

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend will run on `http://localhost:3000`

## 📊 Dashboard Sections

### Main Stage (70% Width)
1. **Risk Trend Chart** - Line chart showing avg risk score and high-risk count over 24h
2. **Velocity Rules** - Grid of active velocity detection rules with violation counts
3. **Review Queue** - Items flagged for manual review with priority levels
4. **Fraud Events Table** - Recent transaction events with filtering and approval/block actions

### Intelligence Sidebar (30% Width)

**Section A: Title & Metrics**
- High-level KPIs: Flagged events, blocked transactions, avg risk score, regions affected

**Section B: Why This Matters**
- Educational context: Why velocity rules matter in payment fraud detection

**Section C: Who Controls the Rail**
- Governance explanation: Card networks, issuing banks, processors, merchants

**Section D: Functional Filters**
- Risk Level filter (LOW, MEDIUM, HIGH)
- Status filter (APPROVED, FLAGGED, BLOCKED, UNDER_REVIEW)
- Apply button to refresh data

**Section E: Download**
- Download sample dataset as JSON

## 📸 Screenshots

### 1. Dashboard Header
![Dashboard Header](screenshots/01-header-dashboard.png)
Main header displaying "Fraud Velocity Monitor" title with real-time status indicator.

### 2. Risk Trend Chart (24-Hour View)
![Risk Trend Chart](screenshots/02-risk-trend-chart.png)
Line chart displaying dual metrics:
- **Left Y-Axis (Cyan):** Average Risk Score (0-100%)
- **Right Y-Axis (Indigo):** High Risk Count (events)
- **X-Axis:** Hourly timestamps over 24 hours
- Real-time trend visualization with smooth interpolation

### 3. Analytics KPI Cards
![Analytics Cards](screenshots/03-analytics-kpi-cards.png)
Four key performance indicators displayed in card format:
- **🚨 Flagged Events (24H):** 1,842 transactions (Rate: 14.8%)
- **🛑 Blocked Transactions:** 127 transactions (445 high-risk)
- **📊 Avg Risk Score:** 52.3 (Current 24h baseline)
- **🌍 Regions Affected:** 8 countries (5411 Grocery Stores)

### 4. Velocity Rules & Review Queue
![Rules and Queue](screenshots/04-velocity-rules-review-queue.png)

**Left Panel - Velocity Detection Rules:**
1. **Same Card 3 Transactions in 5 Min** - 234 violations (HIGH priority)
2. **Same Card 10 Transactions in 1 Hour** - 512 violations (MEDIUM priority)
3. **Same Device 5 Different Merchants in 10 Min** - 89 violations (HIGH priority)

**Right Panel - Review Queue (4 items):**
- **TechStore NYC** - Risk 92 (PENDING_REVIEW, HIGH priority)
- **Global Shopping Online** - Risk 78 (PENDING_REVIEW, HIGH priority)
- **Electronics Depot** - Risk 65 (UNDER_INVESTIGATION, MEDIUM priority)

### 5. Fraud Events Table
![Fraud Events Table](screenshots/05-fraud-events-table.png)
Complete transaction log with 6 events showing:

| Merchant | Amount | Risk | Velocity | Anomaly | Status | Actions |
|----------|--------|------|----------|---------|--------|---------|
| TechStore NYC | $2,450.00 | HIGH | EXCEEDED | TRANSACTION_VELOCITY | FLAGGED | Approve/Block |
| Global Shopping Online | $1,850.50 | HIGH | ELEVATED | GEOGRAPHIC_MISMATCH | FLAGGED | Approve/Block |
| Electronics Depot | $3,200.00 | MEDIUM | NORMAL | UNUSUAL_AMOUNT | UNDER_REVIEW | — |
| Luxury Goods Ltd | $5,600.00 | HIGH | EXCEEDED | CROSS_BORDER_VELOCITY | BLOCKED | — |
| Gas Station Express | $65.00 | LOW | NORMAL | — | APPROVED | — |
| Payment Processor Test | $999.99 | MEDIUM | NORMAL | ROUND_AMOUNT | UNDER_REVIEW | — |

### 6. Filters & Controls Panel
![Filters Panel](screenshots/06-filters-panel.png)

**Risk Level Selector:**
- ☐ LOW (< 30 risk score)
- ☐ MEDIUM (30-60 risk score)
- ☑️ HIGH (> 60 risk score) — *Selected*
- ☑️ APPROVED — *Selected*

**Status Selector:**
- ☑️ APPROVED
- ☐ FLAGGED
- ☐ BLOCKED
- ☐ UNDER_REVIEW

**Buttons:**
- **Apply Filters** - Cyan button to refresh table with selected criteria
- **Download Sample Data** - Cyan button to export mock_data.json

### 7. Educational Content Sections
![Educational Content](screenshots/07-educational-content.png)

**Why This Matters:**
"Fraud velocity rules detect abnormal transaction patterns within seconds. High-velocity attacks—multiple transactions in short time windows—are a primary fraud vector across payment rails. This system monitors real-time transaction streams and flags velocity breaches before cards are compromised at scale."

**Who Controls the Rail:**
"Payment rail governance involves card networks (Visa/Mastercard), issuing banks, merchant acquirers, and third-party processors. Fraud detection is a shared responsibility: networks set velocity thresholds; banks approve/deny transactions; processors execute real-time rules; merchants provide merchant category codes (MCCs) for context."

### 8. Full Dashboard Layout (70/30 Split)
![Full Dashboard](screenshots/08-full-dashboard-layout.png)
Complete dashboard showing:
- **Left (70%):** Risk trend chart, velocity rules, review queue, fraud events table
- **Right (30%):** Intelligence sidebar with analytics cards, educational content, filters
- **Color Scheme:** Real Rails DNA (#030712 background, #38BDF8 cyan accents, #818CF8 indigo)
- **Layout:** Responsive design maintaining 70/30 split across all screen sizes

## 📡 Mock Data

All data is pre-generated in `/backend/mock_data.json` with:
- 6 realistic fraud events with varying risk scores
- 4 velocity detection rules with violation counts
- 4 items in review queue with different priorities
- Risk score trend data for the past 24 hours
- High-level analytics metrics

**Auto-Fallback:** If the backend API is unavailable, the system automatically switches to mock data.

## 🔐 Security

- ✅ Environment variables for API configuration (`.env.local`)
- ✅ No hardcoded credentials
- ✅ CORS enabled for frontend-backend communication
- ✅ API validation with Pydantic schemas

## 📝 Features Implemented

### Fraud Detection
- [x] Real-time event ingestion
- [x] Risk scoring (0-100)
- [x] Velocity rule evaluation
- [x] Anomaly type classification
- [x] Geographic velocity checks

### Visualization
- [x] Risk trend chart (Recharts)
- [x] Velocity rules list
- [x] Review queue prioritization
- [x] Fraud events table
- [x] Device fingerprint tracking
- [x] IP address logging

### User Interactions
- [x] Filter by risk level
- [x] Filter by transaction status
- [x] Approve/block transactions
- [x] Download sample data
- [x] Responsive layout

## 🧪 Testing the System

### Via Browser
1. Start backend: `python backend/app.py`
2. Start frontend: `npm run dev` (in frontend folder)
3. Visit `http://localhost:3000`
4. Use filters in sidebar to explore different risk levels
5. View risk trend chart and review queue
6. Download sample data

### Via API (cURL)
```bash
# Get fraud events
curl http://localhost:8000/api/fraud-events

# Get analytics
curl http://localhost:8000/api/analytics

# Get risk trend
curl http://localhost:8000/api/risk-score-trend

# Get velocity rules
curl http://localhost:8000/api/velocity-rules

# Get review queue
curl http://localhost:8000/api/review-queue
```

## 📚 Real Rails Protocol Compliance

✅ **Visual Identity:** All colors match DNA specs (#030712, #38BDF8, etc.)  
✅ **Layout:** 2-column split (70/30) with sidebar exactly 30% width  
✅ **Backend First:** FastAPI schema established before frontend  
✅ **Intelligence Layer:** Every data point includes context (risk scores, anomaly types)  
✅ **Mock Fallback:** System continues with mock data if API unavailable  
✅ **Terminology:** "Rail," "velocity," "governance" terminology consistent  
✅ **Guardrails:** Environment variables for configs; no hardcoded credentials  

## 🛠️ Troubleshooting

**Frontend can't connect to backend:**
- Ensure backend is running on `http://localhost:8000`
- Check `.env.local` has correct `NEXT_PUBLIC_API_URL`
- Clear browser cache and restart frontend dev server

**Backend API returns 500:**
- Verify `mock_data.json` exists in backend folder
- Check all Pydantic models match API response schema

**Ports already in use:**
- Backend: Change port in `app.py` (default: 8000)
- Frontend: Frontend will auto-increment to 3001 if 3000 is busy

## 📦 Dependencies

### Backend
- fastapi==0.104.1
- uvicorn==0.24.0
- pydantic==2.5.0
- pandas==2.1.3
- python-dateutil==2.8.2

### Frontend
- next==14.0.0
- react==18.2.0
- tailwindcss==3.3.0
- recharts==2.10.0
- axios==1.6.0
- shadcn-ui==0.8.0

## 📖 API Documentation

Swagger UI: http://localhost:8000/docs  
ReDoc: http://localhost:8000/redoc

## 🎯 Next Steps (Enhancement Ideas)

- [ ] Live Mapbox integration for geographic fraud visualization
- [ ] WebSocket support for real-time event streaming
- [ ] Database persistence (PostgreSQL)
- [ ] Authentication/authorization layer
- [ ] Advanced anomaly detection ML model
- [ ] Email/Slack alerting for high-priority cases
- [ ] Historical analytics and trends
- [ ] Merchant dispute workflow

---

**Built with Real Rails Protocol v1.0**  
Real-time Intelligence Library for Payment Infrastructure

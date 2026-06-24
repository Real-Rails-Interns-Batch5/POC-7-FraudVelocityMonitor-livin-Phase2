# Quick Start & Validation Guide

## 🎯 Executive Summary

The **Fraud Velocity Monitor** is a production-style fraud detection dashboard for the Real Rails Intelligence Library. It follows the Real Rails Protocol with:

- ✅ **Architecture:** 2-column layout (70% main stage, 30% intelligence sidebar)
- ✅ **Design:** Dark fintech terminal theme (#030712 background, #38BDF8 cyan accents)
- ✅ **Backend:** FastAPI with structured data schema
- ✅ **Frontend:** Next.js 14+ with TypeScript and Tailwind CSS
- ✅ **Mock Data:** Synthetic fraud events, velocity rules, review queue
- ✅ **Guardrails:** Automatic fallback to mock data if API unavailable

---

## 🚀 Quick Start (Choose One)

### Option 1: Windows Users
```batch
start.bat
```
This opens two command windows and starts both services automatically.

### Option 2: Unix/Mac Users
```bash
bash start.sh
```

### Option 3: Manual Setup

**Terminal 1 - Start Backend:**
```bash
cd backend
python -m venv venv
source venv/bin/activate  # or: venv\Scripts\activate on Windows
pip install -r requirements.txt
python app.py
```

**Terminal 2 - Start Frontend:**
```bash
cd frontend
npm install
npm run dev
```

---

## ✅ Verification Checklist

Once both services are running:

### Check Backend
```bash
# Should return health status
curl http://localhost:8000/health

# Should return API documentation
curl http://localhost:8000/docs
```

### Check Frontend
- Open browser to: **http://localhost:3000**
- You should see the Fraud Velocity Monitor dashboard

### Verify Visual Design
- [ ] Background is dark (#030712)
- [ ] Sidebar on right is ~30% width
- [ ] Main content area is ~70% width
- [ ] Cyan accents (#38BDF8) visible on buttons and chart
- [ ] Cards have subtle gray borders

### Verify Functionality
- [ ] Metrics cards display in sidebar (flagged events, blocked, avg risk, regions)
- [ ] Risk trend chart displays in main area
- [ ] Velocity rules list visible
- [ ] Review queue visible
- [ ] Fraud events table visible
- [ ] Filters work (click filters → apply → table updates)
- [ ] Download button is functional

### Test Filters
1. Click "HIGH" risk level in sidebar
2. Click "Apply Filters"
3. Table should update showing only HIGH risk events

---

## 📊 What You'll See

### Dashboard Sections

**Main Stage (70%):**
1. **Risk Trend Chart** - Line chart showing risk scores over 24 hours
2. **Velocity Rules Grid** - 4 fraud detection rules with violation counts
3. **Review Queue** - 4 high-priority items pending review
4. **Fraud Events Table** - 6 recent transaction events with risk levels

**Intelligence Sidebar (30%):**
1. **Title & Metrics** - Project name and 4 KPI cards
2. **Why This Matters** - Explanation of velocity fraud detection
3. **Who Controls the Rail** - Governance context
4. **Filters** - Risk level and status dropdown filters
5. **Download Button** - Export sample data as JSON

---

## 🔍 Key URLs

| Service | URL | Purpose |
|---------|-----|---------|
| Dashboard | http://localhost:3000 | Main UI |
| API Docs | http://localhost:8000/docs | Swagger documentation |
| API ReDoc | http://localhost:8000/redoc | Alternative API docs |
| Health Check | http://localhost:8000/health | Backend status |
| Mock Data | http://localhost:8000/api/sample-data | Download dataset |

---

## 📝 API Endpoints Reference

All endpoints return JSON:

```
GET  /api/fraud-events              # List fraud events
GET  /api/fraud-events/{id}         # Get specific event
GET  /api/analytics                 # Dashboard metrics
GET  /api/risk-score-trend          # Chart data
GET  /api/velocity-rules            # Fraud detection rules
GET  /api/review-queue              # Items pending review
POST /api/fraud-events/{id}/approve # Mark as approved
POST /api/fraud-events/{id}/block   # Mark as blocked
GET  /api/sample-data               # Download mock dataset
```

---

## 🎨 Real Rails Colors Reference

Use these in any future customizations:

```
#030712 - Background (rails-bg)
#0B1117 - Surface/Cards (rails-surface)
#38BDF8 - Primary Accent (rails-accent) - Cyan
#818CF8 - Secondary Accent (rails-accent-secondary) - Indigo
#1F2937 - Borders (rails-border)
```

---

## 🛠️ Environment Setup

### Frontend `.env.local`
```
NEXT_PUBLIC_API_URL=http://localhost:8000
```

### Backend (No env file needed)
- Uses hardcoded localhost configuration
- Mock data loads from `mock_data.json`

---

## 📚 Documentation Files

1. **README.md** - Full documentation and feature list
2. **DEVELOPMENT.md** - Architecture, component guide, adding features
3. **VERIFICATION.md** - Real Rails Protocol compliance checklist
4. **PROJECT_STRUCTURE.md** - Complete file listing and statistics

---

## ⚡ Performance Notes

- Dashboard loads in <1 second with mock data
- Charts render smoothly with 6 data points
- Table paginated at 50 items
- Filters update without page refresh
- Responsive design for different screen sizes

---

## 🚨 Troubleshooting

### Frontend shows "Loading..." but never loads
- **Check:** Is backend running on http://localhost:8000?
- **Fix:** Check `.env.local` has correct `NEXT_PUBLIC_API_URL`
- **Alternative:** System should auto-fallback to mock data after 5 seconds

### Port already in use
- **Backend:** Change port in `backend/app.py` line ~150: `uvicorn.run(app, port=8001)`
- **Frontend:** Update `.env.local`: `NEXT_PUBLIC_API_URL=http://localhost:8001`

### Import errors in frontend
- **Fix:** Run `npm install` in frontend directory

### Python venv issues
- **Fix:** Delete `venv` folder and run startup script again

### Mock data not loading
- **Check:** Is `backend/mock_data.json` file present?
- **Fix:** Copy from backup or recreate using examples in README

---

## 🎓 Understanding the Data

### Fraud Events (6 examples)
- **EVT_001:** TechStore NYC - $2,450 - Risk 92 - FLAGGED
- **EVT_002:** Global Shopping - $1,850 - Risk 78 - FLAGGED
- **EVT_003:** Electronics Depot - $3,200 - Risk 65 - UNDER_REVIEW
- **EVT_004:** Luxury Goods Ltd - $5,600 - Risk 88 - BLOCKED
- **EVT_005:** Gas Station Express - $65 - Risk 15 - APPROVED
- **EVT_006:** Payment Test - $999 - Risk 42 - UNDER_REVIEW

### Velocity Rules (4 active)
1. **VEL_001:** 3 transactions in 5 min → 234 violations
2. **VEL_002:** 10 transactions in 1 hour → 512 violations
3. **VEL_003:** 5 merchants in 10 min → 89 violations
4. **VEL_004:** Country change in <2 hours → 12 violations

---

## 💾 Exporting Data

Click "Download Sample Data" button in sidebar to download full mock dataset as JSON file including:
- All fraud events
- All analytics metrics
- All velocity rules
- All review queue items
- Risk score trends

---

## ✨ Next Steps

After verifying everything works:

1. **Explore the Dashboard**
   - Try all filters
   - Click events to see details
   - Download sample data

2. **Review Code**
   - Check `app/page.tsx` to understand data flow
   - Review `components/` for UI patterns
   - Study `lib/api.ts` for API integration

3. **Customize**
   - Change colors in `tailwind.config.ts`
   - Add new components in `components/`
   - Create new API endpoints in `backend/app.py`

4. **Deploy**
   - Frontend: Vercel (recommended)
   - Backend: Heroku, Railway, or AWS

---

## 📞 Support Reference

**If something doesn't work:**

1. Check DEVELOPMENT.md (detailed architecture)
2. Review VERIFICATION.md (protocol compliance)
3. Read README.md (comprehensive guide)
4. Check backend logs for errors
5. Clear browser cache and refresh

---

## 🎉 Success!

You've successfully deployed the **Fraud Velocity Monitor** following the Real Rails Protocol!

**Running:**
- ✅ FastAPI backend on http://localhost:8000
- ✅ Next.js frontend on http://localhost:3000
- ✅ Mock data fully functional
- ✅ All filters and interactions working
- ✅ Real Rails DNA completely implemented

**Next:** Enjoy exploring the dashboard! 🚀

---

*Built with Real Rails Intelligence Library Protocol v1.0*  
*Fraud Velocity Monitor - Payment Systems Edition*  
*Generated: 2026-06-24*

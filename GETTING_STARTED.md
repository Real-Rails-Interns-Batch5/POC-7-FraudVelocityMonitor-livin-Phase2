# ✅ FRAUD VELOCITY MONITOR - GETTING STARTED CHECKLIST

## 🎯 Pre-Launch Checklist (Do This First)

- [ ] Navigate to `c:\poc1` directory
- [ ] Review `QUICK_START.md` (5 minutes)
- [ ] Review `INDEX.md` for documentation overview
- [ ] Ensure Python 3.9+ is installed (`python --version`)
- [ ] Ensure Node.js 18+ is installed (`node --version`)
- [ ] Have 500MB disk space available

---

## 🚀 Launch Checklist

### Option A: Windows (Recommended)
- [ ] Double-click `start.bat`
- [ ] Wait for two command windows to appear
- [ ] Check for "Backend started" message
- [ ] Check for "Frontend started" message
- [ ] Wait 30 seconds total

**Skip to "✅ Verification Checklist"**

### Option B: Mac/Linux
- [ ] Open terminal in `c:\poc1`
- [ ] Run `bash start.sh`
- [ ] Watch for service startup messages
- [ ] Wait 30 seconds total

**Skip to "✅ Verification Checklist"**

### Option C: Manual Setup

**Terminal 1:**
- [ ] `cd backend`
- [ ] `python -m venv venv`
- [ ] `source venv/bin/activate` (or `venv\Scripts\activate` on Windows)
- [ ] `pip install -r requirements.txt`
- [ ] `python app.py`
- [ ] Confirm: "Uvicorn running on http://0.0.0.0:8000"

**Terminal 2:**
- [ ] `cd frontend`
- [ ] `npm install`
- [ ] `npm run dev`
- [ ] Confirm: "ready started server on 0.0.0.0:3000"

---

## ✅ Verification Checklist

### Backend Verification
- [ ] Open browser to: http://localhost:8000/health
- [ ] Should see JSON response: `{"status": "ok", ...}`
- [ ] Open: http://localhost:8000/docs
- [ ] Should see Swagger API documentation
- [ ] Verify endpoints listed:
  - [ ] `/api/fraud-events`
  - [ ] `/api/analytics`
  - [ ] `/api/risk-score-trend`
  - [ ] `/api/velocity-rules`
  - [ ] `/api/review-queue`

### Frontend Verification
- [ ] Open browser to: http://localhost:3000
- [ ] Page should load within 5 seconds
- [ ] Should see dashboard title: "Fraud Velocity Monitor"
- [ ] Should see dark background color (#030712)

---

## 🎨 Visual Verification Checklist

### Color Verification
- [ ] Background is dark (nearly black) #030712
- [ ] Cards are slightly lighter (deep navy) #0B1117
- [ ] Cyan buttons/text visible (#38BDF8)
- [ ] Border lines are dark gray (#1F2937)

### Layout Verification
- [ ] Two-column layout visible
- [ ] Left side (70%) has main content
- [ ] Right side (30%) has sidebar with title "Fraud Velocity Monitor"
- [ ] Header at top with title and timestamp badge

### Sidebar Verification
- [ ] "Fraud Velocity Monitor" title visible
- [ ] 4 metric cards visible (Flagged Events, Blocked, Avg Risk, Regions)
- [ ] "Why This Matters" section visible
- [ ] "Who Controls the Rail" section visible
- [ ] Filters section visible (Risk Level dropdown)
- [ ] "Download Sample Data" button visible

### Main Content Verification
- [ ] Risk Trend Chart visible with line graph
- [ ] Velocity Rules cards visible (4 rules)
- [ ] Review Queue section visible (items listed)
- [ ] Fraud Events table visible (rows and columns)

---

## 🔌 Functionality Checklist

### Filter Testing
- [ ] Click "HIGH" in Risk Level filter
- [ ] Click "Apply Filters" button
- [ ] Table should update (only HIGH risk shown)
- [ ] Click "LOW" instead
- [ ] Click "Apply Filters"
- [ ] Table should update (only LOW risk shown)

### Download Testing
- [ ] Click "Download Sample Data" button
- [ ] Should download JSON file with name like: `fraud-velocity-monitor-sample-2026-06-24.json`
- [ ] File should be >1KB
- [ ] File should contain fraud events, rules, analytics

### Chart Rendering
- [ ] Risk Trend Chart should show line graph
- [ ] Chart should have X-axis with times
- [ ] Chart should have Y-axis with score values
- [ ] Two lines should be visible (cyan and indigo)

### Table Functionality
- [ ] Fraud Events table should show 6 rows
- [ ] Columns: Timestamp, Merchant, Amount, Risk, Velocity, Anomaly, Status, Actions
- [ ] High risk events should show red background
- [ ] Medium risk should show yellow background
- [ ] Low risk should show green background
- [ ] Approve/Block buttons visible on FLAGGED events

---

## 📊 Data Verification Checklist

### Mock Data Check
- [ ] Backend should serve mock data from `mock_data.json`
- [ ] Fraud events visible in table (EVT_001 through EVT_006)
- [ ] Analytics metrics populated:
  - [ ] Flagged Transactions: 1,842
  - [ ] Blocked Transactions: 127
  - [ ] Avg Risk Score: 52.3
  - [ ] Regions Affected: 8
- [ ] Velocity Rules showing:
  - [ ] VEL_001 with 234 violations
  - [ ] VEL_002 with 512 violations
  - [ ] VEL_003 with 89 violations
  - [ ] VEL_004 with 12 violations
- [ ] Review Queue showing 4 items with priorities

---

## 🛠️ API Testing Checklist

### Test Fraud Events Endpoint
```bash
curl http://localhost:8000/api/fraud-events
```
- [ ] Should return array of 6+ events
- [ ] Each event has: id, timestamp, merchant_name, risk_score, status

### Test Analytics Endpoint
```bash
curl http://localhost:8000/api/analytics
```
- [ ] Should return: total_transactions_24h, flagged_transactions, avg_risk_score

### Test Risk Trend Endpoint
```bash
curl http://localhost:8000/api/risk-score-trend
```
- [ ] Should return array of 5 trend data points
- [ ] Each point has: timestamp, avg_score, high_risk_count

### Test Velocity Rules Endpoint
```bash
curl http://localhost:8000/api/velocity-rules
```
- [ ] Should return 4 velocity rules
- [ ] Each rule has: rule_id, name, threshold, window_minutes, severity

### Test Review Queue Endpoint
```bash
curl http://localhost:8000/api/review-queue
```
- [ ] Should return 4+ queue items
- [ ] Each item has: review_id, merchant_name, risk_score, priority

---

## 📝 Documentation Review Checklist

- [ ] ✅ Read `QUICK_START.md` (5 min)
- [ ] ✅ Reviewed `README.md` for overview
- [ ] ✅ Skimmed `DEVELOPMENT.md` for architecture
- [ ] ✅ Checked `VERIFICATION.md` for protocol compliance
- [ ] ✅ Explored `INDEX.md` for documentation map

---

## 🎓 Understanding Checklist

Can you explain:
- [ ] What the 2-column layout represents? (70% main stage, 30% intelligence sidebar)
- [ ] Why mock data is used? (Fallback when API unavailable)
- [ ] What velocity rules are? (Fraud detection patterns)
- [ ] The purpose of the review queue? (Items pending human review)
- [ ] What the Real Rails Protocol is? (Development standard for this project)

---

## 🚀 Ready to Customize? Checklist

- [ ] Understand project structure (see `PROJECT_STRUCTURE.md`)
- [ ] Located backend API in `backend/app.py`
- [ ] Located frontend components in `frontend/components/`
- [ ] Found color definitions in `frontend/tailwind.config.ts`
- [ ] Located mock data in `backend/mock_data.json`
- [ ] Read "Adding New Features" in `DEVELOPMENT.md`

---

## 🌐 Deployment Readiness Checklist

### Before Deploying to Production:
- [ ] All tests pass locally (above checklists complete)
- [ ] Environment variables set up properly
- [ ] Mock data fallback working
- [ ] CORS configured for your domain
- [ ] API keys stored in environment variables (not source code)
- [ ] Database configured (if applicable)
- [ ] Monitoring/logging set up
- [ ] API rate limiting configured
- [ ] HTTPS/SSL enabled
- [ ] Backup strategy in place

---

## 🎯 Troubleshooting Checklist

If something isn't working:

### Dashboard won't load
- [ ] Backend running? Check http://localhost:8000/health
- [ ] Frontend running? Check terminal for "ready started server"
- [ ] Port conflicts? Check QUICK_START.md troubleshooting
- [ ] Firewall blocking? Disable temporarily for testing

### API returns 500 error
- [ ] Check `backend/mock_data.json` exists
- [ ] Restart backend server
- [ ] Check Python version (3.9+)
- [ ] Check all dependencies installed

### Filters not working
- [ ] Open browser console (F12)
- [ ] Check for JavaScript errors
- [ ] Clear browser cache and refresh
- [ ] Verify backend API responding to queries

### Charts not rendering
- [ ] Check browser console for errors
- [ ] Verify mock data is being loaded
- [ ] Try refreshing page
- [ ] Check if Recharts is rendering component

---

## ✨ Success Indicators

You're successful when you can:

- ✅ Access dashboard at http://localhost:3000
- ✅ See all 4 KPI metrics in sidebar
- ✅ See risk trend chart with data
- ✅ See velocity rules list (4 items)
- ✅ See review queue (4 items)
- ✅ See fraud events table (6 events)
- ✅ Filter by risk level and see table update
- ✅ Download sample data
- ✅ Access API docs at http://localhost:8000/docs
- ✅ Call API endpoints and get JSON responses

---

## 🎉 Congratulations!

If you've completed all checklists above, you have successfully:

✅ Set up the Fraud Velocity Monitor  
✅ Verified backend and frontend working  
✅ Tested all UI components  
✅ Verified mock data  
✅ Tested API endpoints  
✅ Reviewed documentation  
✅ Understood the architecture  

**You're ready to explore, customize, and deploy!**

---

## 📍 Next Steps

1. **Explore:** Play with filters, download data, review events
2. **Learn:** Read DEVELOPMENT.md to understand component architecture
3. **Customize:** Change colors, add features, modify content
4. **Extend:** Connect to real data sources (CFPB, FRED)
5. **Deploy:** Follow deployment instructions in README.md

---

## 📞 Quick Reference

| Need | File | Section |
|------|------|---------|
| Fast Setup | QUICK_START.md | Quick Start |
| Full Docs | README.md | Project Overview |
| Architecture | DEVELOPMENT.md | Component Architecture |
| Compliance | VERIFICATION.md | Visual Identity |
| Structure | PROJECT_STRUCTURE.md | Complete File Listing |
| Index | INDEX.md | Documentation Map |

---

*Getting Started Checklist v1.0*  
*Fraud Velocity Monitor - Real Rails Intelligence Library*  
*Print this page or save as reference while setting up*

**Started:** ___________  
**Completed:** ___________  
**Status:** ✅ READY TO USE

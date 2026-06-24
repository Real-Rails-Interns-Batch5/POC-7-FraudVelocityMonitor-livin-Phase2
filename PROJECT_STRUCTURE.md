# Fraud Velocity Monitor - Project Structure

## Complete File Listing

```
poc1/
│
├── README.md                          # Main project documentation
├── DEVELOPMENT.md                     # Development guide and architecture
├── VERIFICATION.md                    # Real Rails Protocol compliance checklist
├── .gitignore                         # Git ignore rules
├── start.bat                          # Windows startup script
├── start.sh                           # Unix/Mac startup script
│
├── backend/
│   ├── app.py                         # FastAPI application (main backend)
│   ├── mock_data.json                 # Mock dataset for demo (6 events + rules)
│   ├── data_adapter.py                # External data source integration
│   ├── requirements.txt               # Python dependencies
│   │
│   ├── venv/                          # Python virtual environment (created on first run)
│   └── __pycache__/                   # Python cache (auto-generated)
│
├── frontend/
│   ├── package.json                   # NPM dependencies and scripts
│   ├── tsconfig.json                  # TypeScript configuration
│   ├── next.config.js                 # Next.js configuration
│   ├── tailwind.config.ts             # Tailwind CSS configuration
│   ├── postcss.config.js              # PostCSS configuration
│   ├── .eslintrc.json                 # ESLint configuration
│   ├── .env.example                   # Environment variables template
│   ├── .env.local                     # Environment variables (local development)
│   │
│   ├── app/
│   │   ├── layout.tsx                 # Root layout component
│   │   ├── page.tsx                   # Main dashboard page (orchestrates data)
│   │   ├── globals.css                # Global CSS and Real Rails theme
│   │
│   ├── components/
│   │   ├── DashboardHeader.tsx        # Top header with title
│   │   ├── MainStage.tsx              # 70% main content area
│   │   ├── IntelligenceSidebar.tsx    # 30% intelligence sidebar
│   │   ├── AnalyticsHeader.tsx        # KPI metric cards
│   │   ├── RiskTrendChart.tsx         # Risk score time-series chart
│   │   ├── VelocityRulesList.tsx      # Velocity rules display
│   │   ├── ReviewQueue.tsx            # Review queue items
│   │   ├── FraudEventsTable.tsx       # Transaction table
│   │   ├── FilterPanel.tsx            # Filter controls
│   │   ├── LoadingSpinner.tsx         # Loading animation
│   │   └── CollapsibleSection.tsx     # Collapsible container
│   │
│   ├── lib/
│   │   ├── api.ts                     # API client and endpoints
│   │   └── utils.ts                   # Utility functions (formatting, colors)
│   │
│   ├── types/
│   │   └── index.ts                   # TypeScript type definitions
│   │
│   ├── node_modules/                  # NPM packages (created on first run)
│   ├── .next/                         # Next.js build output (created on build)
│   └── out/                           # Static export output (if applicable)
│
```

## Total Files Created

- **Backend:** 4 source files + config
- **Frontend:** 20+ React/TypeScript files + config
- **Documentation:** 3 comprehensive guides
- **Configuration:** Package configs, environment setup, startup scripts

## Key Statistics

- **Backend Endpoints:** 10 REST endpoints
- **Frontend Components:** 12 custom React components
- **Mock Data Records:** 20+ events, rules, and queue items
- **Tailwind Classes:** 40+ custom utility classes
- **Type Definitions:** 6 TypeScript interfaces
- **API Methods:** 15+ API client methods
- **Color Palette:** 5 Real Rails DNA colors

## Quick Start Files

1. **For Windows:** Run `start.bat`
2. **For Unix/Mac:** Run `bash start.sh`
3. **Manual:** See README.md "Quick Start" section

## Important Files to Review

1. `README.md` - Main documentation (start here!)
2. `app.py` - Backend API implementation
3. `app/page.tsx` - Main dashboard logic
4. `VERIFICATION.md` - Protocol compliance status
5. `DEVELOPMENT.md` - Architecture and development guide

## Next Steps After Launch

1. Access dashboard at http://localhost:3000
2. API docs at http://localhost:8000/docs
3. Test filters and interactions
4. Download sample data
5. Review mock events and trends

---

Generated: 2026-06-24  
Protocol: Real Rails v1.0  
Project: Fraud Velocity Monitor

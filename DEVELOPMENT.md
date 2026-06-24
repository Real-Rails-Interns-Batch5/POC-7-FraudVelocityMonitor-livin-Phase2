# Fraud Velocity Monitor - Development Guide

## Project Structure

```
poc1/
├── backend/
│   ├── app.py                 # FastAPI application
│   ├── mock_data.json         # Mock dataset for demo
│   ├── data_adapter.py        # External data source integration
│   ├── requirements.txt       # Python dependencies
│   └── venv/                  # Python virtual environment
│
├── frontend/
│   ├── app/
│   │   ├── page.tsx           # Main dashboard page
│   │   ├── layout.tsx         # Root layout
│   │   └── globals.css        # Global styles
│   ├── components/            # React components
│   │   ├── DashboardHeader.tsx
│   │   ├── MainStage.tsx
│   │   ├── IntelligenceSidebar.tsx
│   │   ├── AnalyticsHeader.tsx
│   │   ├── RiskTrendChart.tsx
│   │   ├── VelocityRulesList.tsx
│   │   ├── ReviewQueue.tsx
│   │   ├── FraudEventsTable.tsx
│   │   ├── FilterPanel.tsx
│   │   └── ...
│   ├── lib/
│   │   ├── api.ts             # API client
│   │   └── utils.ts           # Utility functions
│   ├── types/
│   │   └── index.ts           # TypeScript types
│   ├── package.json
│   ├── tsconfig.json
│   ├── next.config.js
│   ├── tailwind.config.ts
│   └── .env.local
│
├── README.md
├── start.bat (Windows)
├── start.sh (Unix/Mac)
└── .gitignore
```

## Component Architecture

### Page Layer
- `app/page.tsx` - Main dashboard, orchestrates data fetching and filtering

### Layout Layer
- `DashboardHeader` - Top navigation/title bar
- `IntelligenceSidebar` - Right sidebar with analytics and controls (30% width)
- `MainStage` - Left content area with visualizations (70% width)

### Data Visualization Layer
- `RiskTrendChart` - Time-series line chart (Recharts)
- `VelocityRulesList` - Rule cards with violation counts
- `ReviewQueue` - Priority-sorted review items
- `FraudEventsTable` - Detailed transaction table

### Interactive Layer
- `FilterPanel` - Risk level and status filters
- `AnalyticsHeader` - Metric cards (flagged, blocked, avg risk, regions)
- `FraudEventsTable` - Approve/block action buttons

## Data Flow

```
Backend API (FastAPI)
    ↓
API Client (lib/api.ts)
    ↓
Main Page (app/page.tsx)
    ├→ MainStage (displays visualizations)
    └→ IntelligenceSidebar (displays insights + filters)
        ├→ AnalyticsHeader
        ├→ FilterPanel
        └→ Download button
```

## Styling Guide

### Colors
- Background: `#030712` (class: `bg-rails-bg`)
- Surface: `#0B1117` (class: `bg-rails-surface`)
- Primary Accent: `#38BDF8` (class: `text-rails-accent`)
- Secondary Accent: `#818CF8` (class: `text-rails-accent-secondary`)
- Border: `#1F2937` (class: `border-rails-border`)

### Component Classes
- `.rails-card` - Standard card with border and padding
- `.rails-button` - Primary action button
- `.glassmorphism` - Glassmorphic effect
- `.cyan-glow` - Cyan outline glow effect
- `.velocity-alert` - Pulsing animation for alerts

## Adding New Features

### 1. Add New Endpoint (Backend)

In `backend/app.py`:
```python
@app.get("/api/new-endpoint", tags=["Category"])
async def get_new_data():
    if not MOCK_DATA:
        raise HTTPException(status_code=500, detail="Mock data unavailable")
    return MOCK_DATA.get("new_data", [])
```

### 2. Add API Client Method (Frontend)

In `frontend/lib/api.ts`:
```typescript
export const newApi = {
  getData: () => apiClient.get('/api/new-endpoint'),
};
```

### 3. Create Component (Frontend)

In `frontend/components/NewComponent.tsx`:
```typescript
'use client';

interface NewComponentProps {
  data: any[];
}

export default function NewComponent({ data }: NewComponentProps) {
  return (
    <div className="rails-card">
      {/* Component JSX */}
    </div>
  );
}
```

### 4. Integrate into Dashboard

In `frontend/app/page.tsx`:
```typescript
const [newData, setNewData] = useState(null);

// Add to fetchDashboardData:
const newRes = await newApi.getData().catch(() => null);
if (newRes?.data) setNewData(newRes.data);

// Add to JSX:
{newData && <NewComponent data={newData} />}
```

## Real Rails Protocol Checklist

- [ ] Background color is #030712
- [ ] Sidebar width is exactly 30%
- [ ] Main stage width is exactly 70%
- [ ] Colors match DNA specs
- [ ] Filters update without full page refresh
- [ ] Mock data fallback works
- [ ] No hardcoded credentials
- [ ] Documentation is complete
- [ ] API schema uses Pydantic models
- [ ] Environment variables configured

## Testing Checklist

- [ ] Backend runs on localhost:8000
- [ ] Frontend runs on localhost:3000
- [ ] API docs accessible at localhost:8000/docs
- [ ] Mock data loads successfully
- [ ] Risk filters work without page refresh
- [ ] Status filters work without page refresh
- [ ] Download button works
- [ ] Responsive layout on different screen sizes
- [ ] Chart renders correctly
- [ ] Review queue displays correctly

## Performance Optimization Tips

1. Use React Suspense for async data loading
2. Implement pagination for large event lists
3. Cache API responses with SWR or React Query
4. Lazy load charts and heavy components
5. Optimize images and bundle size
6. Use CSS-in-JS sparingly; stick to Tailwind

## Deployment Notes

### Vercel (Recommended for Frontend)
```bash
cd frontend
vercel
```

### Heroku/Railway (For Backend)
```bash
# In backend folder
git push heroku main
```

### Environment Variables
- `NEXT_PUBLIC_API_URL` - Backend API URL
- `DATABASE_URL` - (if using database)
- `API_KEY` - (if using external APIs like Mapbox)

## Troubleshooting

**Issue:** Frontend can't reach backend
- **Solution:** Check `.env.local` has correct `NEXT_PUBLIC_API_URL`

**Issue:** Port already in use
- **Solution:** Kill process or change port in `app.py`

**Issue:** Module not found errors
- **Solution:** Run `npm install` or `pip install -r requirements.txt`

**Issue:** Mock data not loading
- **Solution:** Ensure `mock_data.json` is in backend directory

## Future Enhancements

1. **Real-time WebSocket Updates** - Live event streaming
2. **Database Integration** - PostgreSQL for persistence
3. **Authentication** - JWT or OAuth2
4. **Mapbox Integration** - Geographic fraud visualization
5. **ML Model** - Anomaly detection algorithm
6. **Alerting** - Email/Slack notifications
7. **Historical Analytics** - Long-term trend analysis
8. **Export** - PDF reports, CSV downloads

---

*Last Updated: 2026-06-24*

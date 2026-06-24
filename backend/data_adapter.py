"""
Data Adapter for External Sources
Handles integration with CFPB, FRED, and other data sources
"""

from datetime import datetime, timedelta
from typing import Optional, Dict, List
import random

class DataSourceAdapter:
    """
    Adapter for fetching and transforming data from external sources.
    This is a placeholder for real API integrations.
    """
    
    @staticmethod
    def fetch_from_cfpb(
        endpoint: str,
        filters: Optional[Dict] = None,
        limit: int = 100
    ) -> List[Dict]:
        """
        Fetch complaint data from CFPB API.
        
        Example endpoint: /data/complaints?product=Credit card
        https://data.consumerfinance.gov/
        """
        # Implementation would call actual CFPB API
        return []
    
    @staticmethod
    def fetch_from_fred(
        series_id: str,
        units: str = "lin"
    ) -> Dict:
        """
        Fetch economic data from Federal Reserve Economic Data.
        
        Series IDs:
        - MORTGAGE30US: 30-Year Mortgage Rate
        - UNRATE: Unemployment Rate
        - DFF: Effective Federal Funds Rate
        
        https://fred.stlouisfed.org/
        """
        # Implementation would call actual FRED API
        return {}
    
    @staticmethod
    def transform_cfpb_complaints(raw_complaints: List[Dict]) -> List[Dict]:
        """Transform CFPB complaint data to fraud event schema"""
        transformed = []
        for complaint in raw_complaints:
            transformed.append({
                "id": complaint.get("id"),
                "timestamp": complaint.get("date_received"),
                "merchant_name": complaint.get("company"),
                "transaction_amount": random.uniform(100, 10000),
                "anomaly_type": complaint.get("issue"),
                "status": "FLAGGED",
                "risk_score": random.randint(40, 95),
            })
        return transformed
    
    @staticmethod
    def generate_synthetic_events(count: int = 50) -> List[Dict]:
        """Generate synthetic fraud events for demo purposes"""
        events = []
        base_time = datetime.utcnow()
        
        anomaly_types = [
            "VELOCITY_EXCEEDED",
            "GEOGRAPHIC_MISMATCH",
            "UNUSUAL_AMOUNT",
            "CROSS_BORDER_VELOCITY",
            "DEVICE_MISMATCH"
        ]
        
        for i in range(count):
            event_time = base_time - timedelta(minutes=random.randint(1, 1440))
            events.append({
                "id": f"EVT_{str(i+1).zfill(3)}",
                "timestamp": event_time.isoformat() + "Z",
                "merchant_name": f"Merchant_{i+1}",
                "transaction_amount": random.uniform(10, 5000),
                "risk_score": random.randint(15, 95),
                "anomaly_type": random.choice(anomaly_types),
                "status": random.choice(["APPROVED", "FLAGGED", "BLOCKED"]),
            })
        
        return sorted(events, key=lambda x: x["timestamp"], reverse=True)

# Usage example:
if __name__ == "__main__":
    adapter = DataSourceAdapter()
    
    # Generate synthetic data
    events = adapter.generate_synthetic_events(50)
    print(f"Generated {len(events)} synthetic fraud events")

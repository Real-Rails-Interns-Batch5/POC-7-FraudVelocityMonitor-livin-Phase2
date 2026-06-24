export interface FraudEvent {
  id: string;
  timestamp: string;
  merchant_id: string;
  merchant_name: string;
  transaction_amount: number;
  transaction_currency: string;
  cardholder_country: string;
  merchant_country: string;
  card_last_4: string;
  risk_score: number;
  risk_level: 'LOW' | 'MEDIUM' | 'HIGH';
  velocity_flag: string;
  device_fingerprint: string;
  ip_address: string;
  anomaly_type: string;
  mcc_category: string;
  status: 'APPROVED' | 'FLAGGED' | 'BLOCKED' | 'UNDER_REVIEW';
  region: string;
  lat: number;
  lon: number;
}

export interface Analytics {
  total_transactions_24h: number;
  flagged_transactions: number;
  blocked_transactions: number;
  fraud_rate_percent: number;
  avg_risk_score: number;
  high_risk_count: number;
  regions_affected: number;
  top_attack_vector: string;
  top_mcc_targeted: string;
}

export interface RiskScoreTrend {
  timestamp: string;
  avg_score: number;
  high_risk_count: number;
}

export interface VelocityRule {
  rule_id: string;
  name: string;
  threshold: number;
  window_minutes: number;
  severity: string;
  active: boolean;
  violation_count_24h: number;
}

export interface ReviewQueueItem {
  review_id: string;
  event_id: string;
  merchant_name: string;
  risk_score: number;
  reason: string;
  queued_at: string;
  priority: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  status: string;
}

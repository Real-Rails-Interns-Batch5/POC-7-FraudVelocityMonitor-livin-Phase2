'use client';

import { Analytics } from '@/types';
import { formatCurrency, formatPercentage } from '@/lib/utils';

interface MetricsCardProps {
  label: string;
  value: string | number;
  subtext?: string;
  color?: 'cyan' | 'red' | 'yellow' | 'green';
}

function MetricCard({ label, value, subtext, color = 'cyan' }: MetricsCardProps) {
  const colorMap = {
    cyan: 'text-rails-accent',
    red: 'text-red-400',
    yellow: 'text-yellow-400',
    green: 'text-green-400',
  };

  return (
    <div className="rails-card">
      <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">{label}</div>
      <div className={`text-2xl font-bold ${colorMap[color]} mb-1`}>{value}</div>
      {subtext && <div className="text-xs text-gray-600">{subtext}</div>}
    </div>
  );
}

interface AnalyticsHeaderProps {
  analytics: Analytics;
}

export default function AnalyticsHeader({ analytics }: AnalyticsHeaderProps) {
  return (
    <div className="grid grid-cols-2 gap-3 mb-6">
      <MetricCard
        label="Flagged Events (24h)"
        value={analytics.flagged_transactions.toLocaleString()}
        subtext={`Rate: ${formatPercentage(analytics.fraud_rate_percent)}`}
        color="red"
      />
      <MetricCard
        label="Blocked Transactions"
        value={analytics.blocked_transactions}
        subtext={`${analytics.high_risk_count} high-risk`}
        color="red"
      />
      <MetricCard
        label="Avg Risk Score"
        value={analytics.avg_risk_score.toFixed(1)}
        subtext="Current 24h baseline"
        color="yellow"
      />
      <MetricCard
        label="Regions Affected"
        value={analytics.regions_affected}
        subtext={analytics.top_mcc_targeted}
        color="cyan"
      />
    </div>
  );
}

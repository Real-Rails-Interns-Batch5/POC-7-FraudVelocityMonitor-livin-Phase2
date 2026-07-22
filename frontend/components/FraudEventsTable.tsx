'use client';

import { FraudEvent } from '@/types';
import { formatCurrency, formatDate } from '@/lib/utils';

interface FraudEventsTableProps {
  events: FraudEvent[];
  onApprove?: (eventId: string) => void;
  onBlock?: (eventId: string) => void;
}

function RiskBadge({ level }: { level: string }) {
  const colorMap: Record<string, string> = {
    LOW: 'bg-green-500/20 text-green-400',
    MEDIUM: 'bg-yellow-500/20 text-yellow-400',
    HIGH: 'bg-red-500/20 text-red-400',
  };

  return (
    <span className={`px-2 py-1 rounded text-xs font-semibold ${colorMap[level] || colorMap.MEDIUM}`}>
      {level}
    </span>
  );
}

export default function FraudEventsTable({ 
  events, 
  onApprove, 
  onBlock 
}: FraudEventsTableProps) {
  if (events.length === 0) {
    return (
      <div className="rails-card text-center py-12">
        <div className="text-gray-500">No fraud events to display</div>
      </div>
    );
  }

  return (
    <div className="rails-card overflow-x-auto">
      <div className="text-xs text-gray-500 uppercase tracking-wider mb-4 font-semibold">
        Recent Fraud Events ({events.length})
      </div>
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-rails-border">
            <th className="text-left py-3 px-3 text-xs text-gray-500 font-semibold">Timestamp</th>
            <th className="text-left py-3 px-3 text-xs text-gray-500 font-semibold">Merchant</th>
            <th className="text-left py-3 px-3 text-xs text-gray-500 font-semibold">Amount</th>
            <th className="text-left py-3 px-3 text-xs text-gray-500 font-semibold">Risk</th>
            <th className="text-left py-3 px-3 text-xs text-gray-500 font-semibold">Velocity</th>
            <th className="text-left py-3 px-3 text-xs text-gray-500 font-semibold">Anomaly</th>
            <th className="text-left py-3 px-3 text-xs text-gray-500 font-semibold">Status</th>
            <th className="text-left py-3 px-3 text-xs text-gray-500 font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr 
              key={event.id}
              className="border-b border-rails-border/30 hover:bg-rails-border/20 transition-colors"
            >
              <td className="py-3 px-3 text-xs text-gray-400">
                {formatDate(event.timestamp).split(' ').slice(0, 2).join(' ')}
              </td>
              <td className="py-3 px-3 text-gray-300 font-medium truncate max-w-xs">
                {event.merchant_name}
              </td>
              <td className="py-3 px-3 text-gray-300">
                {formatCurrency(event.transaction_amount)}
              </td>
              <td className="py-3 px-3">
                <RiskBadge level={event.risk_level} />
              </td>
              <td className="py-3 px-3 text-xs text-gray-400">
                {event.velocity_flag.replace(/_/g, ' ')}
              </td>
              <td className="py-3 px-3 text-xs text-gray-400">
                {event.anomaly_type !== 'NONE' ? event.anomaly_type.replace(/_/g, ' ') : '—'}
              </td>
              <td className="py-3 px-3">
                <span className={`text-xs px-2 py-1 rounded ${
                  event.status === 'BLOCKED' ? 'bg-red-500/20 text-red-400' :
                  event.status === 'APPROVED' ? 'bg-green-500/20 text-green-400' :
                  'bg-yellow-500/20 text-yellow-400'
                }`}>
                  {event.status}
                </span>
              </td>
              <td className="py-3 px-3">
                <div className="flex gap-2">
                  {event.status === 'FLAGGED' && (
                    <>
                      <button 
                        onClick={() => onApprove?.(event.id)}
                        className="text-xs px-2 py-1 rounded bg-green-500/20 text-green-400 hover:bg-green-500/30 transition-colors"
                      >
                        Approve
                      </button>
                      <button 
                        onClick={() => onBlock?.(event.id)}
                        className="text-xs px-2 py-1 rounded bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-colors"
                      >
                        Block
                      </button>
                    </>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

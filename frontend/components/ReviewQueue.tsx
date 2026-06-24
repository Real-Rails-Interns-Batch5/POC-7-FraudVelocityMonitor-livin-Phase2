'use client';

import { ReviewQueueItem } from '@/types';
import { formatDate } from '@/lib/utils';

interface ReviewQueueProps {
  items: ReviewQueueItem[];
}

function PriorityBadge({ priority }: { priority: string }) {
  const colorMap: Record<string, string> = {
    LOW: 'bg-blue-500/20 text-blue-400',
    MEDIUM: 'bg-yellow-500/20 text-yellow-400',
    HIGH: 'bg-orange-500/20 text-orange-400',
    CRITICAL: 'bg-red-500/20 text-red-400 velocity-alert',
  };

  return (
    <span className={`px-2 py-1 rounded text-xs font-semibold ${colorMap[priority] || colorMap.MEDIUM}`}>
      {priority}
    </span>
  );
}

export default function ReviewQueue({ items }: ReviewQueueProps) {
  if (items.length === 0) {
    return (
      <div className="rails-card text-center py-8">
        <div className="text-gray-500 text-sm">No items in review queue</div>
      </div>
    );
  }

  return (
    <div className="rails-card">
      <div className="text-xs text-gray-500 uppercase tracking-wider mb-4 font-semibold">
        Review Queue ({items.length})
      </div>
      <div className="space-y-2 max-h-96 overflow-y-auto">
        {items.map((item) => (
          <div 
            key={item.review_id}
            className="border border-rails-border rounded p-3 hover:bg-rails-border/30 transition-colors"
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex-1">
                <div className="text-sm font-semibold text-gray-200">{item.merchant_name}</div>
                <div className="text-xs text-gray-500 mt-1">{item.reason}</div>
              </div>
              <PriorityBadge priority={item.priority} />
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-rails-border/50 text-xs">
              <span className="text-gray-500">Risk: <span className="text-rails-accent font-bold">{item.risk_score}</span></span>
              <span className="text-gray-500 text-xs">{item.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

'use client';

import { VelocityRule } from '@/types';

interface VelocityRulesListProps {
  rules: VelocityRule[];
}

function SeverityBadge({ severity }: { severity: string }) {
  const colorMap: Record<string, string> = {
    LOW: 'bg-blue-500/20 text-blue-400',
    MEDIUM: 'bg-yellow-500/20 text-yellow-400',
    HIGH: 'bg-orange-500/20 text-orange-400',
    CRITICAL: 'bg-red-500/20 text-red-400',
  };

  return (
    <span className={`px-2 py-1 rounded text-xs font-semibold ${colorMap[severity] || colorMap.MEDIUM}`}>
      {severity}
    </span>
  );
}

export default function VelocityRulesList({ rules }: VelocityRulesListProps) {
  return (
    <div className="rails-card">
      <div className="text-xs text-gray-500 uppercase tracking-wider mb-4 font-semibold">
        Velocity Detection Rules
      </div>
      <div className="space-y-3">
        {rules.map((rule) => (
          <div 
            key={rule.rule_id}
            className="border border-rails-border rounded p-3 hover:border-rails-accent/50 transition-colors"
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex-1">
                <div className="text-sm font-semibold text-gray-200">{rule.name}</div>
                <div className="text-xs text-gray-500 mt-1">
                  {rule.threshold} events in {rule.window_minutes} minutes
                </div>
              </div>
              <SeverityBadge severity={rule.severity} />
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-rails-border/50">
              <span className="text-xs text-gray-500">Violations (24h):</span>
              <span className="text-sm font-bold text-rails-accent">
                {rule.violation_count_24h}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

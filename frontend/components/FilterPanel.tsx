'use client';

import { useState } from 'react';

interface FilterPanelProps {
  onRiskLevelChange: (level: string | null) => void;
  onStatusChange: (status: string | null) => void;
  onApply: () => void;
}

export default function FilterPanel({ 
  onRiskLevelChange, 
  onStatusChange,
  onApply 
}: FilterPanelProps) {
  const [selectedRiskLevel, setSelectedRiskLevel] = useState<string | null>(null);
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);

  const handleRiskLevelChange = (level: string) => {
    const newLevel = selectedRiskLevel === level ? null : level;
    setSelectedRiskLevel(newLevel);
    onRiskLevelChange(newLevel);
  };

  const handleStatusChange = (status: string) => {
    const newStatus = selectedStatus === status ? null : status;
    setSelectedStatus(newStatus);
    onStatusChange(newStatus);
  };

  const handleApply = () => {
    onApply();
  };

  return (
    <div className="rails-card">
      <div className="text-xs text-gray-500 uppercase tracking-wider mb-4 font-semibold">
        Filters
      </div>
      
      <div className="space-y-4">
        {/* Risk Level Filter */}
        <div>
          <label className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-2 block">
            Risk Level
          </label>
          <div className="space-y-2">
            {['LOW', 'MEDIUM', 'HIGH'].map(level => (
              <button
                key={level}
                onClick={() => handleRiskLevelChange(level)}
                className={`w-full text-left px-3 py-2 rounded text-sm transition-colors border ${
                  selectedRiskLevel === level
                    ? 'bg-rails-accent/20 border-rails-accent/50 text-rails-accent'
                    : 'bg-rails-border/20 border-rails-border/50 text-gray-400 hover:bg-rails-border/40'
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>

        {/* Status Filter */}
        <div>
          <label className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-2 block">
            Status
          </label>
          <div className="space-y-2">
            {['APPROVED', 'FLAGGED', 'BLOCKED', 'UNDER_REVIEW'].map(status => (
              <button
                key={status}
                onClick={() => handleStatusChange(status)}
                className={`w-full text-left px-3 py-2 rounded text-sm transition-colors border ${
                  selectedStatus === status
                    ? 'bg-rails-accent/20 border-rails-accent/50 text-rails-accent'
                    : 'bg-rails-border/20 border-rails-border/50 text-gray-400 hover:bg-rails-border/40'
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        {/* Apply Button */}
        <button 
          onClick={handleApply}
          className="w-full rails-button text-sm"
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
}

'use client';

import { Analytics } from '@/types';
import AnalyticsHeader from './AnalyticsHeader';
import FilterPanel from './FilterPanel';

interface IntelligenceSidebarProps {
  analytics: Analytics | null;
  onRiskLevelChange: (level: string | null) => void;
  onStatusChange: (status: string | null) => void;
  onApply: () => void;
  onDownload: () => void;
}

export default function IntelligenceSidebar({
  analytics,
  onRiskLevelChange,
  onStatusChange,
  onApply,
  onDownload
}: IntelligenceSidebarProps) {
  return (
    <div className="w-[30%] bg-rails-bg border-l border-rails-border overflow-y-auto flex flex-col">
      <div className="flex-1 p-6 space-y-6">
        
        {/* Section A: Title & High-level Metric */}
        <div className="pb-4 border-b border-rails-border">
          <h2 className="text-xl font-bold text-rails-accent mb-1">
            Fraud Velocity Monitor
          </h2>
          <p className="text-xs text-gray-500">
            Real-time fraud detection for payment systems
          </p>
        </div>

        {/* Section B: Analytics Metrics */}
        {analytics && (
          <div>
            <AnalyticsHeader analytics={analytics} />
          </div>
        )}

        {/* Section B: Why This Matters */}
        <div className="rails-card">
          <div className="text-xs text-gray-500 uppercase tracking-wider mb-3 font-semibold">
            Why This Matters
          </div>
          <div className="text-sm text-gray-300 leading-relaxed">
            Fraud velocity rules detect abnormal transaction patterns within seconds. High-velocity 
            attacks—multiple transactions in short time windows—are a primary fraud vector across 
            payment rails. This system monitors real-time transaction streams and flags velocity 
            breaches before cards are compromised at scale.
          </div>
        </div>

        {/* Section C: Who Controls the Rail */}
        <div className="rails-card">
          <div className="text-xs text-gray-500 uppercase tracking-wider mb-3 font-semibold">
            Who Controls the Rail
          </div>
          <div className="text-sm text-gray-300 leading-relaxed">
            Payment rail governance involves card networks (Visa/Mastercard), issuing banks, 
            merchant acquirers, and third-party processors. Fraud detection is a shared responsibility: 
            networks set velocity thresholds; banks approve/deny transactions; processors execute 
            real-time rules; merchants provide merchant category codes (MCCs) for context.
          </div>
        </div>

        {/* Section D: Functional Filters */}
        <div>
          <FilterPanel 
            onRiskLevelChange={onRiskLevelChange}
            onStatusChange={onStatusChange}
            onApply={onApply}
          />
        </div>

      </div>

      {/* Section E: Download Button */}
      <div className="p-6 border-t border-rails-border">
        <button
          onClick={onDownload}
          className="w-full rails-button justify-center"
        >
          ↓ Download Sample Data
        </button>
      </div>
    </div>
  );
}

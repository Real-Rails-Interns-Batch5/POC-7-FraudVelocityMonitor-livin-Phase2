'use client';

import RiskTrendChart from './RiskTrendChart';
import VelocityRulesList from './VelocityRulesList';
import ReviewQueue from './ReviewQueue';
import FraudEventsTable from './FraudEventsTable';
import { RiskScoreTrend, VelocityRule, ReviewQueueItem, FraudEvent } from '@/types';

interface MainStageProps {
  riskTrend: RiskScoreTrend[] | null;
  velocityRules: VelocityRule[] | null;
  reviewQueue: ReviewQueueItem[] | null;
  fraudEvents: FraudEvent[] | null;
  isLoading: boolean;
}

export default function MainStage({
  riskTrend,
  velocityRules,
  reviewQueue,
  fraudEvents,
  isLoading
}: MainStageProps) {
  if (isLoading) {
    return (
      <div className="flex-1 p-8 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block">
            <div className="animate-spin">
              <div className="w-12 h-12 border-4 border-rails-border border-t-rails-accent rounded-full" />
            </div>
          </div>
          <p className="mt-4 text-gray-500">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto bg-rails-bg">
      <div className="p-8 space-y-8">
        
        {/* Risk Trend Chart */}
        {riskTrend && riskTrend.length > 0 && (
          <div>
            <RiskTrendChart data={riskTrend} />
          </div>
        )}

        {/* Two-Column Layout: Rules & Review Queue */}
        {(velocityRules || reviewQueue) && (
          <div className="grid grid-cols-2 gap-8">
            {velocityRules && (
              <VelocityRulesList rules={velocityRules} />
            )}
            {reviewQueue && (
              <ReviewQueue items={reviewQueue} />
            )}
          </div>
        )}

        {/* Fraud Events Table */}
        {fraudEvents && (
          <div>
            <FraudEventsTable 
              events={fraudEvents}
              onApprove={(eventId) => console.log('Approve:', eventId)}
              onBlock={(eventId) => console.log('Block:', eventId)}
            />
          </div>
        )}

      </div>
    </div>
  );
}

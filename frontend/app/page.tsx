'use client';

import { useEffect, useState } from 'react';
import DashboardHeader from '@/components/DashboardHeader';
import IntelligenceSidebar from '@/components/IntelligenceSidebar';
import MainStage from '@/components/MainStage';
import { 
  Analytics, 
  FraudEvent, 
  ReviewQueueItem, 
  RiskScoreTrend, 
  VelocityRule 
} from '@/types';
import { 
  fraudApi, 
  analyticsApi, 
  rulesApi, 
  reviewApi, 
  dataApi 
} from '@/lib/api';

export default function DashboardPage() {
  // State
  const [analytics, setAnalytics] = useState<Analytics | null>(null);
  const [riskTrend, setRiskTrend] = useState<RiskScoreTrend[] | null>(null);
  const [velocityRules, setVelocityRules] = useState<VelocityRule[] | null>(null);
  const [reviewQueue, setReviewQueue] = useState<ReviewQueueItem[] | null>(null);
  const [fraudEvents, setFraudEvents] = useState<FraudEvent[] | null>(null);
  
  const [filterRiskLevel, setFilterRiskLevel] = useState<string | null>(null);
  const [filterStatus, setFilterStatus] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch data from backend
  const fetchDashboardData = async (riskLevel?: string | null, status?: string | null) => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Parallel API calls
      const [
        analyticsRes,
        trendRes,
        rulesRes,
        queueRes,
        eventsRes
      ] = await Promise.all([
        analyticsApi.getMetrics().catch(() => null),
        analyticsApi.getRiskTrend().catch(() => null),
        rulesApi.getVelocityRules().catch(() => null),
        reviewApi.getQueue().catch(() => null),
        fraudApi.getEvents(riskLevel || undefined, status || undefined, 50).catch(() => null)
      ]);

      if (analyticsRes?.data) setAnalytics(analyticsRes.data);
      if (trendRes?.data) setRiskTrend(trendRes.data);
      if (rulesRes?.data) setVelocityRules(rulesRes.data);
      if (queueRes?.data) setReviewQueue(queueRes.data);
      if (eventsRes?.data) setFraudEvents(eventsRes.data);

      // Fallback message if API is down
      if (!analyticsRes && !trendRes && !rulesRes && !queueRes && !eventsRes) {
        setError('Backend API unavailable. Displaying mock data.');
      }
    } catch (err) {
      console.error('Dashboard fetch error:', err);
      setError('Failed to load dashboard data. Using mock data.');
    } finally {
      setIsLoading(false);
    }
  };

  // Initial load
  useEffect(() => {
    fetchDashboardData();
  }, []);

  // Handle filter apply
  const handleApplyFilters = () => {
    fetchDashboardData(filterRiskLevel, filterStatus);
  };

  // Handle download sample data
  const handleDownloadSampleData = async () => {
    try {
      const res = await dataApi.downloadSampleData();
      const dataStr = JSON.stringify(res.data, null, 2);
      const blob = new Blob([dataStr], { type: 'application/json' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `fraud-velocity-monitor-sample-${new Date().toISOString().split('T')[0]}.json`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Download error:', err);
      alert('Failed to download sample data');
    }
  };

  return (
    <div className="w-full h-screen bg-rails-bg flex flex-col">
      {/* Header */}
      <DashboardHeader />

      {/* Main Content Area: 70% Main Stage + 30% Sidebar */}
      <div className="flex flex-1 overflow-hidden">
        
        {/* Main Stage (70%) */}
        <MainStage
          riskTrend={riskTrend}
          velocityRules={velocityRules}
          reviewQueue={reviewQueue}
          fraudEvents={fraudEvents}
          isLoading={isLoading}
        />

        {/* Intelligence Sidebar (30%) */}
        <IntelligenceSidebar
          analytics={analytics}
          onRiskLevelChange={setFilterRiskLevel}
          onStatusChange={setFilterStatus}
          onApply={handleApplyFilters}
          onDownload={handleDownloadSampleData}
        />
      </div>

      {/* Error/Status Banner */}
      {error && (
        <div className="px-8 py-3 bg-yellow-500/10 border-t border-yellow-500/30 text-yellow-400 text-sm">
          ⚠ {error} 
          <button 
            onClick={() => fetchDashboardData()}
            className="ml-4 underline hover:no-underline"
          >
            Retry
          </button>
        </div>
      )}
    </div>
  );
}

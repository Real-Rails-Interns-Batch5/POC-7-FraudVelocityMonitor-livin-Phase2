'use client';

import { AlertCircle } from 'lucide-react';

export default function DashboardHeader() {
  return (
    <div className="bg-rails-surface border-b border-rails-border px-8 py-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-100 mb-1">
            Fraud Velocity Monitor
          </h1>
          <p className="text-sm text-gray-500">
            Real-time Intelligence Dashboard for Payment Systems
          </p>
        </div>
        
        <div className="flex items-center gap-3 px-4 py-2 rounded border border-yellow-500/30 bg-yellow-500/10">
          <AlertCircle className="w-5 h-5 text-yellow-400" />
          <span className="text-sm text-yellow-400">
            {/* Current timestamp will be added via client component */}
          </span>
        </div>
      </div>
    </div>
  );
}

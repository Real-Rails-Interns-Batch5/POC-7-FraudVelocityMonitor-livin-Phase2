'use client';

import { Menu, X, Info } from 'lucide-react';
import { useState } from 'react';
import DeveloperSignature from './DeveloperSignature';

export default function DashboardHeader({ 
  isSidebarOpen = true, 
  onToggleSidebar 
}: { 
  isSidebarOpen?: boolean; 
  onToggleSidebar?: () => void;
} = {}) {
  const [isSignatureOpen, setIsSignatureOpen] = useState(false);
  return (
    <div className="bg-rails-surface border-b border-rails-border px-8 py-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-100 mb-1">
            Infocreon Internship - FRAUD VELOCITY MONITOR
          </h1>
          <p className="text-sm text-gray-500">
            Real-time Intelligence Dashboard for Payment Systems
          </p>
        </div>
        <div className="flex items-center gap-3">

          <button 
            onClick={() => setIsSignatureOpen(true)}
            className="p-2 rounded hover:bg-rails-border transition-colors text-gray-400 hover:text-white"
          >
            <Info className="w-5 h-5" />
          </button>
          {onToggleSidebar && (
            <button 
              onClick={onToggleSidebar}
              className="p-2 rounded hover:bg-rails-border transition-colors text-gray-400 hover:text-white"
            >
              {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          )}
        </div>
      </div>
      {isSignatureOpen && (
        <DeveloperSignature onClose={() => setIsSignatureOpen(false)} />
      )}
    </div>
  );
}

'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface CollapsibleSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export default function CollapsibleSection({ 
  title, 
  children, 
  defaultOpen = true 
}: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="rails-card">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between hover:text-rails-accent transition-colors"
      >
        <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold">
          {title}
        </div>
        <ChevronDown 
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      
      {isOpen && (
        <div className="mt-4 pt-4 border-t border-rails-border">
          {children}
        </div>
      )}
    </div>
  );
}

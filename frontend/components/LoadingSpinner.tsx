'use client';

export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center">
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 border-4 border-rails-border rounded-full" />
        <div className="absolute inset-0 border-4 border-transparent border-t-rails-accent rounded-full animate-spin" />
      </div>
    </div>
  );
}

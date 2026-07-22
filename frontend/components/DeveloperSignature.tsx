import { X, User } from 'lucide-react';

export default function DeveloperSignature({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm" onClick={onClose}>
      <div
        className="w-[450px] bg-[#0B1117] border border-[#1F2937] rounded-xl shadow-2xl overflow-hidden glassmorphism"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-[#1F2937]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#FBBF24]/10 flex items-center justify-center border border-[#FBBF24]/30">
              <User className="w-5 h-5 text-[#FBBF24]" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-100">Developer Signature</h2>
              <p className="text-xs text-gray-500">Verified project author details</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white hover:bg-[#1F2937] rounded-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-5">
          <ul className="flex flex-col">
            <li className="flex py-3 border-b border-[#1F2937]">
              <span className="w-32 text-xs font-semibold text-gray-500 uppercase">ARCHITECT</span>
              <span className="text-sm text-gray-200">LIVIN LINSON</span>
            </li>
            <li className="flex py-3 border-b border-[#1F2937]">
              <span className="w-32 text-xs font-semibold text-gray-500 uppercase">BATCH</span>
              <span className="text-sm text-gray-200">Batch 5 Interns</span>
            </li>
            <li className="flex py-3 border-b border-[#1F2937]">
              <span className="w-32 text-xs font-semibold text-gray-500 uppercase">POC ID</span>
              <span className="text-sm text-gray-200">7</span>
            </li>
            <li className="flex py-3 border-b border-[#1F2937]">
              <span className="w-32 text-xs font-semibold text-gray-500 uppercase">GITHUB</span>
              <span className="text-sm text-gray-200">livin00</span>
            </li>
            <li className="flex py-3 border-b border-[#1F2937]">
              <span className="w-32 text-xs font-semibold text-gray-500 uppercase">STACK</span>
              <span className="text-sm text-gray-200">Next.js, FastAPI, Tailwind CSS</span>
            </li>
          </ul>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-[#1F2937] bg-black/20 text-center">
          <p className="text-xs text-gray-500">© 2026 Infocreon Internship</p>
        </div>
      </div>
    </div>
  );
}

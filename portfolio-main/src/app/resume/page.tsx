'use client';
import { useEffect } from 'react';

export default function ResumePage() {
  useEffect(() => {
    window.location.href = '/resume.pdf';
  }, []);

  return (
    <div className="min-h-screen bg-[#0a192f] flex items-center justify-center">
      <p className="text-[#64ffda] font-mono">Loading resume...</p>
    </div>
  );
} 
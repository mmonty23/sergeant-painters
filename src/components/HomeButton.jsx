import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';

export default function HomeButton() {
  const handleClick = () => {
    window.location.href = createPageUrl('Home');
  };

  return (
    <div onClick={handleClick} className="cursor-pointer">
      <div className="fixed top-4 left-4 z-50 w-16 h-16 rounded-full overflow-hidden flex items-center justify-center bg-white shadow-lg hover:shadow-xl transition-shadow">
        <img 
          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6997137b3b52a1df864f0b6d/5374f7522_AI-Image-Editor-2026-02-19_09-56-23.png" 
          alt="JUST-N-TIME Logo"
          className="w-full h-full object-cover scale-110"
        />
      </div>
    </div>
  );
}
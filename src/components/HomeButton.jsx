import React from 'react';
import { Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from './utils';
import { Button } from '@/components/ui/button';

export default function HomeButton() {
  return (
    <Link to={createPageUrl('Home')}>
      <Button 
        variant="ghost" 
        size="icon"
        className="fixed top-4 left-4 z-50 bg-white/90 hover:bg-white shadow-lg rounded-full h-12 w-12"
      >
        <Home className="h-5 w-5 text-slate-700" />
      </Button>
    </Link>
  );
}
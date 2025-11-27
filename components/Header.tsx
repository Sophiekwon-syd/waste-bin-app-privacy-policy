import React from 'react';
import { Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  appName: string;
}

const Header: React.FC<HeaderProps> = ({ appName }) => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center text-white">
            <Trash2 size={20} />
          </div>
          <span className="text-xl font-bold text-gray-900 tracking-tight">{appName}</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium text-gray-600 hover:text-brand-600 transition-colors">Home</Link>
          <a href="#contact" className="text-sm font-medium text-gray-600 hover:text-brand-600 transition-colors">Support</a>
          <span className="text-sm font-medium text-brand-600">Privacy</span>
        </nav>
      </div>
    </header>
  );
};

export default Header;
import React from 'react';
import { LogOut } from 'lucide-react';

interface HeaderProps {
  username: string;
  onLogout: () => void;
}

export const Header: React.FC<HeaderProps> = ({ username, onLogout }) => {
  return (
    <header className="text-center mb-12 relative">
      <div className="absolute right-0 top-0">
        <button
          onClick={onLogout}
          className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
        >
          <span className="text-sm">Logout</span>
          <LogOut className="w-4 h-4" />
        </button>
      </div>
      
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        {username}'s Silver Stack Tracker
      </h1>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Build your wealth one day at a time. Track your daily 3-gram silver purchases
        and watch your investment chain grow.
      </p>
    </header>
  );
};
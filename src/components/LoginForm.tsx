import React, { useState } from 'react';
import { LogIn } from 'lucide-react';

interface LoginFormProps {
  onLogin: (username: string) => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      onLogin(username.trim());
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Silver Stack Tracker
        </h2>
        <p className="text-gray-600 mb-8 text-center">
          Track your daily silver investments and build your wealth
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-silver-500 focus:border-transparent outline-none transition-all"
              placeholder="Enter your username"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-silver-600 hover:bg-silver-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            <LogIn className="w-5 h-5" />
            <span>Sign In</span>
          </button>
        </form>
      </div>
    </div>
  );
};
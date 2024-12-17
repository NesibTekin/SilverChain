import React from 'react';
import { Check } from 'lucide-react';

interface CheckInButtonProps {
  onCheckIn: () => void;
  disabled: boolean;
}

export const CheckInButton: React.FC<CheckInButtonProps> = ({ onCheckIn, disabled }) => {
  return (
    <div className="flex justify-center">
      <button
        onClick={onCheckIn}
        disabled={disabled}
        className={`
          flex items-center gap-2 px-8 py-4 rounded-full
          ${
            disabled
              ? 'bg-gray-300 cursor-not-allowed'
              : 'bg-silver-600 hover:bg-silver-700 transform hover:scale-105'
          }
          text-white font-semibold transition-all duration-300 shadow-lg
          mx-auto
        `}
      >
        <Check className="w-6 h-6" />
        <span className="text-lg">Check In Today's Purchase</span>
      </button>
    </div>
  );
};
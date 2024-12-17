import React from 'react';
import { Link } from 'lucide-react';

interface ChainProps {
  streak: number;
}

export const Chain: React.FC<ChainProps> = ({ streak }) => {
  return (
    <div className="flex flex-wrap justify-center items-center max-w-2xl mx-auto p-4">
      {Array.from({ length: streak }).map((_, index) => (
        <div
          key={index}
          className="animate-fade-in -ml-1"
          style={{
            animation: `fadeIn 0.5s ease-out ${index * 0.1}s`,
            opacity: 0,
            animationFillMode: 'forwards',
            transform: `rotate(${index % 2 ? 15 : -15}deg)`,
          }}
        >
          <Link
            className="w-10 h-10 text-silver-600 transform hover:scale-110 transition-transform"
            strokeWidth={2}
            style={{
              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
            }}
          />
        </div>
      ))}
    </div>
  );
};
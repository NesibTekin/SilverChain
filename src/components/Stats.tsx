import React from 'react';
import { Calendar, TrendingUp, Award } from 'lucide-react';
import { formatCurrency } from '../utils/dateUtils';

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, label, value }) => (
  <div className="bg-white rounded-xl shadow-lg p-6 flex items-center gap-4 transform hover:scale-105 transition-transform">
    <div className="text-silver-600">{icon}</div>
    <div>
      <h3 className="text-gray-500 text-sm">{label}</h3>
      <p className="text-2xl font-bold text-gray-800">{value}</p>
    </div>
  </div>
);

interface StatsProps {
  streak: number;
  totalSilver: number;
}

export const Stats: React.FC<StatsProps> = ({ streak, totalSilver }) => {
  const SILVER_PRICE_PER_GRAM = 0.83; // Current silver price per gram
  const investmentValue = totalSilver * SILVER_PRICE_PER_GRAM;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto p-4">
      <StatCard
        icon={<Calendar className="w-10 h-10" />}
        label="Current Streak"
        value={`${streak} days`}
      />
      <StatCard
        icon={<TrendingUp className="w-10 h-10" />}
        label="Total Silver"
        value={`${totalSilver}g`}
      />
      <StatCard
        icon={<Award className="w-10 h-10" />}
        label="Investment Value"
        value={`$${formatCurrency(investmentValue)}`}
      />
    </div>
  );
};
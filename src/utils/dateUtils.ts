export const isSameDay = (date1: Date, date2: Date): boolean => {
  return date1.toDateString() === date2.toDateString();
};

export const formatCurrency = (amount: number): string => {
  return amount.toFixed(2);
};
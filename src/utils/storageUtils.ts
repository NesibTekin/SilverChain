const STORAGE_KEYS = {
  STREAK: 'streak',
  LAST_CHECK_IN: 'lastCheckIn',
} as const;

export const getStoredStreak = (): number => {
  const saved = localStorage.getItem(STORAGE_KEYS.STREAK);
  return saved ? parseInt(saved) : 0;
};

export const getStoredLastCheckIn = (): Date | null => {
  const saved = localStorage.getItem(STORAGE_KEYS.LAST_CHECK_IN);
  return saved ? new Date(saved) : null;
};

export const saveStreak = (streak: number): void => {
  localStorage.setItem(STORAGE_KEYS.STREAK, streak.toString());
};

export const saveLastCheckIn = (date: Date): void => {
  localStorage.setItem(STORAGE_KEYS.LAST_CHECK_IN, date.toISOString());
};
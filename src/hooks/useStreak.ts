import { useState, useEffect } from 'react';
import { getUserStorageKey } from '../utils/authUtils';
import { isSameDay } from '../utils/dateUtils';

interface UserData {
  streak: number;
  lastCheckIn: string | null;
}

const DEFAULT_USER_DATA: UserData = {
  streak: 0,
  lastCheckIn: null,
};

export const useStreak = (username: string) => {
  const storageKey = getUserStorageKey(username);
  
  const getUserData = (): UserData => {
    const saved = localStorage.getItem(storageKey);
    return saved ? JSON.parse(saved) : DEFAULT_USER_DATA;
  };

  const [userData, setUserData] = useState<UserData>(() => getUserData());

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(userData));
  }, [userData, storageKey]);

  const handleCheckIn = () => {
    const now = new Date();
    setUserData(prev => ({
      streak: prev.streak + 1,
      lastCheckIn: now.toISOString(),
    }));
  };

  const isCheckInDisabled = () => {
    if (!userData.lastCheckIn) return false;
    return isSameDay(new Date(userData.lastCheckIn), new Date());
  };

  return {
    streak: userData.streak,
    lastCheckIn: userData.lastCheckIn ? new Date(userData.lastCheckIn) : null,
    handleCheckIn,
    isCheckInDisabled,
  };
};
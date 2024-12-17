const STORAGE_KEYS = {
  CURRENT_USER: 'currentUser',
  USER_DATA_PREFIX: 'userData_',
} as const;

export const getCurrentUser = (): string | null => {
  return localStorage.getItem(STORAGE_KEYS.CURRENT_USER);
};

export const setCurrentUser = (username: string): void => {
  localStorage.setItem(STORAGE_KEYS.CURRENT_USER, username);
};

export const logoutUser = (): void => {
  localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
};

export const getUserStorageKey = (username: string) => {
  return `streak_${username}`;
};
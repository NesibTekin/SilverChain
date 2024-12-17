import { useState} from 'react';
import { getCurrentUser, setCurrentUser, logoutUser } from '../utils/authUtils';

export const useAuth = () => {
  const [username, setUsername] = useState<string | null>(getCurrentUser);

  const login = (newUsername: string) => {
    setCurrentUser(newUsername);
    setUsername(newUsername);
  };

  const logout = () => {
    logoutUser();
    setUsername(null);
  };

  return {
    username,
    login,
    logout,
  };
};
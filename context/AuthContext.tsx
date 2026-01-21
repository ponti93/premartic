
import React, { createContext, useContext, useState } from 'react';
import { UserProfile } from '../types';

interface AuthContextType {
  user: any | null;
  profile: UserProfile | null;
  loading: boolean;
  signOut: () => Promise<void>;
  refreshProfile: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Mock user for demo purposes - always logged in
  const mockUser = {
    uid: 'demo-user',
    email: 'demo@premartic.com',
    displayName: 'Demo User'
  };

  const mockProfile: UserProfile = {
    id: 'demo-user',
    email: 'demo@premartic.com',
    tokens: 50,
    tier: 'free',
    role: 'user',
    session_started: new Date().toISOString(),
    last_active: new Date().toISOString()
  };

  const [user] = useState<any>(mockUser);
  const [profile] = useState<UserProfile>(mockProfile);
  const [loading] = useState(false);

  const signOut = async () => {
    // Mock sign out - do nothing
  };

  const refreshProfile = async () => {
    // Mock refresh - do nothing
  };

  return (
    <AuthContext.Provider value={{ user, profile, loading, signOut, refreshProfile }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

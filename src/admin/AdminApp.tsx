import React, { useState, useEffect } from 'react';
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import Login from './Login';
import AdminLayout from './AdminLayout';

export default function AdminApp() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [isDemoMode, setIsDemoMode] = useState<boolean>(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else if (!isDemoMode) {
        setIsAuthenticated(false);
      }
    });
    return unsubscribe;
  }, [isDemoMode]);

  const handleLogin = () => {
    setIsAuthenticated(true);
    setIsDemoMode(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setIsDemoMode(false);
  };

  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin w-8 h-8 border-4 border-gray-300 border-t-brand-accent rounded-full"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  return <AdminLayout onLogout={handleLogout} />;
}

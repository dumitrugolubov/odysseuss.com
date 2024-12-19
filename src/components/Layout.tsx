import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import Navigation from './Navigation';
import Footer from './Footer';
import CookieConsent from './CookieConsent';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <Navigation />
      <main>{children}</main>
      <Footer />
      <button
        onClick={toggleTheme}
        className="fixed bottom-4 right-4 p-3 rounded-full bg-gray-800 dark:bg-white text-white dark:text-gray-800 shadow-lg"
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
      </button>
      <CookieConsent />
    </div>
  );
}
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { OdysseyLogo } from './icons/OdysseyLogo';
import { Button } from './ui/Button';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <OdysseyLogo />
            <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">Odyssey Exchange</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="/trade" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Trade</a>
            <a href="/markets" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Markets</a>
            <a href="/referral" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Referral</a>
            <a href="https://ody.lol">
              <Button>Start Trading</Button>
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 dark:text-gray-300">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/trade" className="block px-3 py-2 text-gray-700 dark:text-gray-300">Trade</a>
            <a href="/markets" className="block px-3 py-2 text-gray-700 dark:text-gray-300">Markets</a>
            <a href="/referral" className="block px-3 py-2 text-gray-700 dark:text-gray-300">Referral</a>
            <a href="https://ody.lol">
              <Button fullWidth>Start Trading</Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
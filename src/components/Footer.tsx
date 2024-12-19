import React from 'react';
import { Twitter, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Odyssey Exchange</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              The world's first meme coin-focused cryptocurrency exchange platform.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="https://x.com/t_dmi3" className="text-gray-400 hover:text-gray-500">
                <Twitter size={20} />
              </a>
              <a href="https://t.me/odysseyexchange_m" className="text-gray-400 hover:text-gray-500">
                <Send size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="/terms" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Terms of Service</a></li>
              <li><a href="/privacy" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Privacy Policy</a></li>
              <li><a href="/kyc" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">KYC Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">Support</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="/faq" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">FAQ</a></li>
              <li><a href="/support" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Contact</a></li>
              <li><a href="/docs" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">API Docs</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Odyssey Exchange. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
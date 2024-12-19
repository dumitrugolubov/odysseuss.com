import React from 'react';
import { LineChart, ArrowLeftRight, Wallet } from 'lucide-react';
import { GradientText } from '../components/ui/GradientText';

export default function Trade() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">
        <GradientText>Trade Meme Coins</GradientText>
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <LineChart className="w-8 h-8 mb-4 text-blue-600" />
          <h2 className="text-xl font-semibold mb-2">Advanced Charts</h2>
          <p className="text-gray-600 dark:text-gray-400">Professional-grade trading charts with multiple timeframes and indicators</p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <ArrowLeftRight className="w-8 h-8 mb-4 text-blue-600" />
          <h2 className="text-xl font-semibold mb-2">Instant Swaps</h2>
          <p className="text-gray-600 dark:text-gray-400">Lightning-fast trades with minimal slippage and maximum efficiency</p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <Wallet className="w-8 h-8 mb-4 text-blue-600" />
          <h2 className="text-xl font-semibold mb-2">Secure Wallet</h2>
          <p className="text-gray-600 dark:text-gray-400">Industry-leading security measures to protect your assets</p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Start Trading?</h2>
        <p className="mb-6">Join thousands of traders on Odyssey Exchange</p>
        <a 
          href="https://ody.lol" 
          className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
        >
          Launch Exchange
        </a>
      </div>
    </div>
  );
}
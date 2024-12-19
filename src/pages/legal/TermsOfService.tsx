import React from 'react';
import { Scroll } from 'lucide-react';
import { GradientText } from '../../components/ui/GradientText';

export default function TermsOfService() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center mb-8">
        <Scroll className="w-8 h-8 mr-3 text-blue-600" />
        <h1 className="text-3xl font-bold">
          <GradientText>Terms of Service</GradientText>
        </h1>
      </div>
      
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-gray-600 dark:text-gray-400">
          Last updated: {new Date().toLocaleDateString()}
        </p>
        
        <h2 className="text-xl font-semibold mt-8 mb-4">1. Agreement to Terms</h2>
        <p className="text-gray-600 dark:text-gray-400">
          By accessing or using Odyssey Exchange, you agree to be bound by these terms of service and all applicable laws and regulations.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">2. Trading Rules</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Users must comply with all trading rules and guidelines set forth by Odyssey Exchange, including but not limited to leverage limits and trading pair restrictions.
        </p>
      </div>
    </div>
  );
}
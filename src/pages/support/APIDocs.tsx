import React from 'react';
import { Code } from 'lucide-react';
import { GradientText } from '../../components/ui/GradientText';

export default function APIDocs() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center mb-8">
        <Code className="w-8 h-8 mr-3 text-blue-600" />
        <h1 className="text-3xl font-bold">
          <GradientText>API Documentation</GradientText>
        </h1>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
        <h2 className="text-xl font-semibold mb-4">REST API</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Access our trading platform programmatically using our REST API.
        </p>

        <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg">
          <code className="text-sm">
            Base URL: https://api.odysseuss.com/v1
          </code>
        </div>
      </div>
    </div>
  );
}
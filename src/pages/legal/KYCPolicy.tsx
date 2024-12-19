import React from 'react';
import { UserCheck } from 'lucide-react';
import { GradientText } from '../../components/ui/GradientText';

export default function KYCPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center mb-8">
        <UserCheck className="w-8 h-8 mr-3 text-blue-600" />
        <h1 className="text-3xl font-bold">
          <GradientText>KYC Policy</GradientText>
        </h1>
      </div>

      <div className="prose dark:prose-invert max-w-none">
        <p className="text-gray-600 dark:text-gray-400">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">Verification Requirements</h2>
        <p className="text-gray-600 dark:text-gray-400">
          To comply with global regulations, users must complete identity verification before accessing certain features or exceeding specific trading limits.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">Documentation</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Required documents may include government-issued ID, proof of address, and additional information based on your account level and jurisdiction.
        </p>
      </div>
    </div>
  );
}
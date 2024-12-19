import React from 'react';
import { Shield } from 'lucide-react';
import { GradientText } from '../../components/ui/GradientText';

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center mb-8">
        <Shield className="w-8 h-8 mr-3 text-blue-600" />
        <h1 className="text-3xl font-bold">
          <GradientText>Privacy Policy</GradientText>
        </h1>
      </div>

      <div className="prose dark:prose-invert max-w-none">
        <p className="text-gray-600 dark:text-gray-400">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">Data Collection</h2>
        <p className="text-gray-600 dark:text-gray-400">
          We collect and process personal information necessary for providing our trading services and complying with regulatory requirements.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">Data Protection</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Your data is protected using industry-standard security measures and is only used for the purposes specified in this policy.
        </p>
      </div>
    </div>
  );
}
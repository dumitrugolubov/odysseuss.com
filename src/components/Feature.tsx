import React from 'react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function Feature({ icon, title, description }: FeatureProps) {
  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text w-12 h-12">
        {icon}
      </div>
      <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">{title}</h3>
      <p className="mt-2 text-gray-500 dark:text-gray-400">{description}</p>
    </div>
  );
}
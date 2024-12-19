import React from 'react';
import { MessageCircle, SendHorizontal, Twitter } from 'lucide-react';
import { GradientText } from '../../components/ui/GradientText';

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center mb-8">
        <MessageCircle className="w-8 h-8 mr-3 text-blue-600" />
        <h1 className="text-3xl font-bold">
          <GradientText>Contact Support</GradientText>
        </h1>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Community Support</h2>
            <div className="space-y-4">
              <a href="https://t.me/odysseyexchange_m" className="flex items-center text-blue-600 hover:text-blue-700">
                <SendHorizontal className="w-5 h-5 mr-2" />
                Telegram Community
              </a>
              <a href="https://x.com/t_dmi3" className="flex items-center text-blue-600 hover:text-blue-700">
                <Twitter className="w-5 h-5 mr-2" />
                Twitter Support
              </a>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Trading Support</h2>
            <p className="text-gray-600 dark:text-gray-400">
              For immediate trading support, please contact us through Telegram or Twitter.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
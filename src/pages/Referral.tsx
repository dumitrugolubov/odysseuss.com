import React from 'react';
import { Users, Gift, Coins } from 'lucide-react';
import { GradientText } from '../components/ui/GradientText';
import { Button } from '../components/ui/Button';

export default function Referral() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">
          <GradientText>Referral Program</GradientText>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Earn up to 50% commission on your referrals' trading fees
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
          <Users className="w-12 h-12 mx-auto mb-4 text-blue-600" />
          <h2 className="text-xl font-semibold mb-2">Invite Friends</h2>
          <p className="text-gray-600 dark:text-gray-400">Share your unique referral link with friends and community</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
          <Gift className="w-12 h-12 mx-auto mb-4 text-blue-600" />
          <h2 className="text-xl font-semibold mb-2">They Trade</h2>
          <p className="text-gray-600 dark:text-gray-400">Your friends start trading on Odyssey Exchange</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
          <Coins className="w-12 h-12 mx-auto mb-4 text-blue-600" />
          <h2 className="text-xl font-semibold mb-2">You Earn</h2>
          <p className="text-gray-600 dark:text-gray-400">Receive up to 50% of their trading fees as commission</p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Start Earning Today</h2>
        <p className="mb-6">Join our referral program and earn passive income</p>
        <a href="https://ody.lol" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
          Get Started
        </a>
      </div>
    </div>
  );
}
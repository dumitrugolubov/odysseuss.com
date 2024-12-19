import React from 'react';
import { TrendingUp, Zap, Users, Percent } from 'lucide-react';
import { Button } from './ui/Button';
import { GradientText } from './ui/GradientText';
import { Feature } from './Feature';

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
            <span className="block">Trade Meme Coins with</span>
            <GradientText>Zero Fees</GradientText>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-400 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Join the world's first dedicated meme coin exchange. Experience lightning-fast trades with up to 777x leverage.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <a href="https://ody.lol">
              <Button size="lg">Start Trading</Button>
            </a>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Feature 
            icon={<Percent />}
            title="0% Spot Fees"
            description="Trade with zero fees on all spot trading pairs"
          />
          <Feature 
            icon={<TrendingUp />}
            title="777x Leverage"
            description="Maximize your potential with high leverage trading"
          />
          <Feature 
            icon={<Zap />}
            title="10% Rebates"
            description="Get back 10% on all liquidation fees"
          />
          <Feature 
            icon={<Users />}
            title="50% Referrals"
            description="Earn up to 50% commission on referral trades"
          />
        </div>
      </div>
    </div>
  );
}
import React from 'react';
import { TrendingUp, ChevronUp, ChevronDown } from 'lucide-react';
import { GradientText } from '../components/ui/GradientText';

const marketData = [
  { name: 'PEPE/USDT', price: '0.00000123', change: '+15.2%', volume: '1.2M' },
  { name: 'DOGE/USDT', price: '0.12345', change: '-2.5%', volume: '850K' },
  { name: 'SHIB/USDT', price: '0.00002345', change: '+8.7%', volume: '2.1M' },
  { name: 'FLOKI/USDT', price: '0.00000789', change: '+23.4%', volume: '950K' },
];

export default function Markets() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center mb-8">
        <TrendingUp className="w-8 h-8 mr-3 text-blue-600" />
        <h1 className="text-3xl font-bold">
          <GradientText>Live Markets</GradientText>
        </h1>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-900">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Pair</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Price</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">24h Change</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">24h Volume</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Trade</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {marketData.map((market) => (
                <tr key={market.name} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">{market.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-900 dark:text-white">{market.price}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-right">
                    <span className={`inline-flex items-center ${market.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                      {market.change.startsWith('+') ? <ChevronUp className="w-4 h-4 mr-1" /> : <ChevronDown className="w-4 h-4 mr-1" />}
                      {market.change}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-900 dark:text-white">${market.volume}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <a href="https://ody.lol" className="text-blue-600 hover:text-blue-900 dark:hover:text-blue-400">Trade</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
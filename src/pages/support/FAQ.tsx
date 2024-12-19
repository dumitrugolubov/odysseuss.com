import React from 'react';
import { HelpCircle } from 'lucide-react';
import { GradientText } from '../../components/ui/GradientText';

const faqs = [
  {
    question: "What are the trading fees?",
    answer: "We offer 0% spot trading fees for all pairs. Leverage trading fees vary by position size."
  },
  {
    question: "How do I start trading?",
    answer: "Sign up at ody.lol, complete verification, deposit funds, and start trading immediately."
  }
];

export default function FAQ() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center mb-8">
        <HelpCircle className="w-8 h-8 mr-3 text-blue-600" />
        <h1 className="text-3xl font-bold">
          <GradientText>Frequently Asked Questions</GradientText>
        </h1>
      </div>

      <div className="space-y-8">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">{faq.question}</h2>
            <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
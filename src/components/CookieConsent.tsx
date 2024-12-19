import React, { useState, useEffect } from 'react';

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between">
        <p className="text-sm mb-4 sm:mb-0">
          We use cookies to enhance your trading experience and analyze our traffic. 
          By clicking "Accept", you consent to our use of cookies. 
          <a href="/privacy" className="underline ml-1">Learn more</a>
        </p>
        <button
          onClick={acceptCookies}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
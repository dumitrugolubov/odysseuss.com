import React from 'react';

export function OdysseyLogo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="20"
        cy="20"
        r="18"
        stroke="url(#odyssey-gradient)"
        strokeWidth="4"
        className="animate-spin-slow"
      />
      <circle
        cx="20"
        cy="20"
        r="8"
        fill="url(#odyssey-gradient)"
      />
      <defs>
        <linearGradient
          id="odyssey-gradient"
          x1="0"
          y1="0"
          x2="40"
          y2="40"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2563EB" />
          <stop offset="1" stopColor="#9333EA" />
        </linearGradient>
      </defs>
    </svg>
  );
}
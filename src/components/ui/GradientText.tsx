import React from 'react';
import { cn } from '../../utils/cn';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export function GradientText({ children, className }: GradientTextProps) {
  return (
    <span className={cn(
      'bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent',
      className
    )}>
      {children}
    </span>
  );
}

import React from 'react';
import { cn } from '@/lib/utils';

interface AshokChakraProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  spinning?: boolean;
}

const AshokChakra: React.FC<AshokChakraProps> = ({ 
  className, 
  size = 'md', 
  spinning = false 
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-20 h-20',
  };
  
  return (
    <div className={cn(
      sizeClasses[size],
      spinning && 'animate-spin-slow',
      className
    )}>
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="11" fill="#0000B3" />
        <circle cx="12" cy="12" r="9" stroke="#FFFFFF" strokeWidth="0.5" fill="none" />
        <g stroke="#FFFFFF" strokeWidth="0.3">
          {/* 24 spokes of the Ashoka Chakra */}
          {Array.from({ length: 24 }).map((_, i) => {
            const angle = (i * 15 * Math.PI) / 180;
            const x1 = 12 + 5 * Math.cos(angle);
            const y1 = 12 + 5 * Math.sin(angle);
            const x2 = 12 + 9 * Math.cos(angle);
            const y2 = 12 + 9 * Math.sin(angle);
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
          })}
        </g>
      </svg>
    </div>
  );
};

export default AshokChakra;

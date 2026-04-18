
import React from 'react';

export const HummingbirdLogo: React.FC<{ className?: string; color?: string }> = ({ className = "w-16 h-16", color = "currentColor" }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 40C20 40 35 35 45 35C55 35 65 25 75 15C75 15 65 30 60 40C55 50 60 60 65 75C65 75 55 65 45 60C35 55 20 60 20 60C20 60 25 55 25 45C25 35 20 40 20 40Z" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="48" cy="42" r="1.5" fill={color}/>
    <path d="M25 40L10 38" stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);

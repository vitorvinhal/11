import React from 'react';

export function Input({ className = '', ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={`w-full rounded-lg bg-white/[0.05] px-3.5 py-2.5 text-sm text-text-primary outline-none transition focus:bg-white/[0.08] ${className}`}
      {...props}
    />
  );
}
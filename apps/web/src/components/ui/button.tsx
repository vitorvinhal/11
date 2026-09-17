import React from 'react';

const variants: Record<string, string> = {
  default: 'bg-white text-black hover:bg-white/90',
  outline: 'border border-white/10 hover:bg-white/5',
  ghost: 'hover:bg-white/5',
};

const sizes: Record<string, string> = {
  sm: 'px-2.5 py-1.5 text-xs',
  default: 'px-4 py-2 text-sm',
  lg: 'px-5 py-2.5 text-sm',
};

export function Button({
  variant = 'default',
  size = 'default',
  className = '',
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: string; size?: string }) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-lg font-medium transition disabled:opacity-40 ${variants[variant] ?? variants.default} ${sizes[size] ?? sizes.default} ${className}`}
      {...props}
    />
  );
}
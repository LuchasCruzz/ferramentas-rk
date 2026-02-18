import * as React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'seal' | 'ghost';
};

export function Button({variant = 'seal', className = '', ...rest}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition active:translate-y-[1px]';
  const styles =
    variant === 'seal'
      ? 'seal-button'
      : 'bg-transparent hover:bg-black/5 border border-black/10';
  return <button className={`${base} ${styles} ${className}`} {...rest} />;
}

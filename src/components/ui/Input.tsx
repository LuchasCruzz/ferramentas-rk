import * as React from 'react';

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  const {className = '', ...rest} = props;
  return (
    <input
      className={`w-full rounded-xl border border-black/15 bg-white/40 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black/20 ${className}`}
      {...rest}
    />
  );
}

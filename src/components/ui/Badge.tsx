import * as React from 'react';

export function Badge(props: React.HTMLAttributes<HTMLSpanElement>) {
  const {className = '', ...rest} = props;
  return (
    <span
      className={`badge-coat inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${className}`}
      {...rest}
    />
  );
}

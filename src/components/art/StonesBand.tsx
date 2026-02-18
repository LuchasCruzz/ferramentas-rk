import * as React from 'react';

export function StonesBand() {
  return (
    <svg aria-hidden="true" viewBox="0 0 1200 80" className="block h-10 w-full" preserveAspectRatio="none">
      <defs>
        <linearGradient id="stone" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="rgba(105,98,92,.65)" />
          <stop offset="1" stopColor="rgba(60,55,50,.65)" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="1200" height="80" fill="url(#stone)" />
      <g fill="rgba(255,255,255,.10)" stroke="rgba(0,0,0,.18)" strokeWidth="1">
        {Array.from({length: 18}).map((_, i) => {
          const x = i * 70 + (i % 2) * 20;
          const y = (i % 3) * 18 + 8;
          return <rect key={i} x={x} y={y} width="90" height="26" rx="4" />;
        })}
      </g>
      <path d="M0 0h1200v6H0z" fill="rgba(0,0,0,.18)" />
    </svg>
  );
}

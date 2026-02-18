'use client';

import * as React from 'react';

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

export function AdSenseSlot({
  clientId,
  slot,
  format,
  style,
  className
}: {
  clientId: string;
  slot: string;
  format?: string;
  style?: React.CSSProperties;
  className?: string;
}) {
  React.useEffect(() => {
    try {
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.push({});
    } catch {
      // ignore
    }
  }, []);

  return (
    <ins
      className={`adsbygoogle ${className ?? ''}`}
      style={{display: 'block', ...style}}
      data-ad-client={clientId}
      data-ad-slot={slot}
      data-ad-format={format ?? 'auto'}
      data-full-width-responsive="true"
    />
  );
}

import * as React from 'react';
import Script from 'next/script';
import {adsConfig} from '@/config/ads';
import {AdPlaceholder} from './AdPlaceholder';
import {AdSenseSlot} from './AdSenseSlot';

export function AdSidebar() {
  const enabled = adsConfig.enabled && adsConfig.clientId !== 'ca-pub-XXXXXXXX';

  return (
    <div className="hidden lg:block">
      {enabled ? (
        <>
          <Script
            async
            strategy="afterInteractive"
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsConfig.clientId}`}
            crossOrigin="anonymous"
          />
          <AdSenseSlot clientId={adsConfig.clientId} slot={adsConfig.slotSidebar} style={{width: 300, height: 600}} />
        </>
      ) : (
        <AdPlaceholder width={300} height={600} />
      )}
    </div>
  );
}

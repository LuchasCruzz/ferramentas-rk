import * as React from 'react';
import Script from 'next/script';
import {adsConfig} from '@/config/ads';
import {AdPlaceholder} from './AdPlaceholder';
import {AdSenseSlot} from './AdSenseSlot';

export function AdFooter() {
  const enabled = adsConfig.enabled && adsConfig.clientId !== 'ca-pub-XXXXXXXX';

  return (
    <div>
      <div className="hidden md:block">
        {enabled ? (
          <>
            <Script
              async
              strategy="afterInteractive"
              src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsConfig.clientId}`}
              crossOrigin="anonymous"
            />
            <AdSenseSlot clientId={adsConfig.clientId} slot={adsConfig.slotFooter} style={{width: 728, height: 90}} />
          </>
        ) : (
          <AdPlaceholder width={728} height={90} />
        )}
      </div>

      <div className="md:hidden">
        {enabled ? (
          <>
            <Script
              async
              strategy="afterInteractive"
              src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsConfig.clientId}`}
              crossOrigin="anonymous"
            />
            <AdSenseSlot clientId={adsConfig.clientId} slot={adsConfig.slotFooter} style={{width: '100%', minHeight: 100}} />
          </>
        ) : (
          <AdPlaceholder width={'100%'} height={120} />
        )}
      </div>
    </div>
  );
}

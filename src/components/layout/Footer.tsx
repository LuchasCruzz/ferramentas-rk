import * as React from 'react';
import {useTranslations} from 'next-intl';
import {StonesBand} from '@/components/art/StonesBand';
import {AdFooter} from '@/components/ads/AdFooter';

export function Footer() {
  const tSite = useTranslations('site');

  return (
    <footer className="mt-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl">
        <StonesBand />
      </div>

      <div className="mx-auto mt-3 flex max-w-6xl justify-center px-4">
        <AdFooter />
      </div>

      <div className="mx-auto mt-4 max-w-6xl px-4 pb-10 text-center text-xs text-black/70">
        <div className="ornate-divider mx-auto mb-3 max-w-xl" />
        <div>{tSite('disclaimerShort')}</div>
      </div>
    </footer>
  );
}

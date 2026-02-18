import * as React from 'react';
import {AdSidebar} from '@/components/ads/AdSidebar';
import {Header} from './Header';
import {LocaleGate} from './LocaleGate';
import {Footer} from './Footer';

export function SiteShell({children}: {children: React.ReactNode}) {
  return (
    <div className="min-h-screen">
      <LocaleGate />
      <Header />

      <main id="main" className="mx-auto mt-6 max-w-6xl px-4">
        <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
          <section>{children}</section>
          <aside aria-label="Ads sidebar" className="lg:sticky lg:top-6 lg:self-start">
            <AdSidebar />
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}

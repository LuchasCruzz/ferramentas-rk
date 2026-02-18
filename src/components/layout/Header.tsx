import * as React from 'react';
import {useTranslations} from 'next-intl';
import {Skyline} from '@/components/art/Skyline';
import {LanguageSwitcher} from './LanguageSwitcher';
import {Link} from '@/i18n/navigation';

export function Header() {
  const tSite = useTranslations('site');
  const tNav = useTranslations('nav');

  return (
    <header className="relative">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <div className="parchment mx-auto mt-4 max-w-6xl overflow-hidden rounded-3xl shadow-parchment">
        <Skyline />
        <div className="px-5 pb-4">
          <div className="flex flex-col items-center gap-3 md:flex-row md:justify-between">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center gap-3 md:justify-start">
                <span className="badge-coat inline-flex h-9 w-9 items-center justify-center rounded-xl text-sm font-black">
                  RK
                </span>
                <div>
                  <div className="text-xl font-black tracking-tight">{tSite('name')}</div>
                  <div className="text-xs text-black/70">{tSite('tagline')}</div>
                </div>
              </div>
            </div>
            <LanguageSwitcher />
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 md:justify-start">
            <Link href="/" className="rounded-full border border-black/15 bg-white/40 px-4 py-2 text-sm font-semibold hover:bg-black/5">
              {tNav('home')}
            </Link>
            <Link href="/sources" className="rounded-full border border-black/15 bg-white/40 px-4 py-2 text-sm font-semibold hover:bg-black/5">
              {tNav('sources')}
            </Link>
            <Link href="/about" className="rounded-full border border-black/15 bg-white/40 px-4 py-2 text-sm font-semibold hover:bg-black/5">
              {tNav('about')}
            </Link>
            <Link href="/privacy" className="rounded-full border border-black/15 bg-white/40 px-4 py-2 text-sm font-semibold hover:bg-black/5">
              {tNav('privacy')}
            </Link>
            <Link href="/cookies" className="rounded-full border border-black/15 bg-white/40 px-4 py-2 text-sm font-semibold hover:bg-black/5">
              {tNav('cookies')}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

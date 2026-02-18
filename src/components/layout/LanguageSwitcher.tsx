'use client';

import * as React from 'react';
import {useLocale, useTranslations} from 'next-intl';
import {usePathname, useRouter} from '@/i18n/navigation';
import {Button} from '@/components/ui/Button';

const LOCALES = [
  {code: 'pt-br', label: 'PT-BR'},
  {code: 'es', label: 'ES'},
  {code: 'fr', label: 'FR'},
  {code: 'en', label: 'EN'},
  {code: 'de', label: 'DE'}
] as const;

export function LanguageSwitcher() {
  const t = useTranslations('common');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  function setLocale(nextLocale: (typeof LOCALES)[number]['code']) {
    try {
      localStorage.setItem('rktools_locale', nextLocale);
    } catch {
      // ignore
    }
    router.replace(pathname, {locale: nextLocale});
  }

  return (
    <div className="flex flex-wrap items-center justify-center gap-2" aria-label={t('language')}>
      {LOCALES.map((l) => (
        <Button
          key={l.code}
          variant={l.code === locale ? 'seal' : 'ghost'}
          aria-pressed={l.code === locale}
          onClick={() => setLocale(l.code)}
          className="px-3 py-1.5 text-xs"
        >
          {l.label}
        </Button>
      ))}
    </div>
  );
}

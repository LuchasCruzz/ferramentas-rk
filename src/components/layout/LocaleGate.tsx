'use client';

import * as React from 'react';
import {useLocale} from 'next-intl';
import {usePathname, useRouter} from '@/i18n/navigation';
import {routing} from '@/i18n/routing';

export function LocaleGate() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  React.useEffect(() => {
    try {
      const saved = localStorage.getItem('rktools_locale');
      if (!saved) return;
      if (!routing.locales.includes(saved as any)) return;
      if (saved !== locale) {
        router.replace(pathname, {locale: saved as any});
      }
    } catch {
      // ignore
    }
  }, [locale, pathname, router]);

  return null;
}

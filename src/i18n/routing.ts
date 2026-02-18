import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['pt-br', 'es', 'fr', 'en', 'de'],
  defaultLocale: 'en',
  localePrefix: 'always'
});

export type AppLocale = (typeof routing.locales)[number];

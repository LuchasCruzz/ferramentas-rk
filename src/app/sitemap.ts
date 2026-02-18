import type {MetadataRoute} from 'next';
import {routing} from '@/i18n/routing';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://example.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/sources',
    '/about',
    '/privacy',
    '/cookies',
    '/tools/hunger',
    '/tools/fields',
    '/tools/pigs',
    '/tools/trust',
    '/tools/simples'
  ];

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of routing.locales) {
    for (const path of routes) {
      entries.push({
        url: `${SITE_URL}/${locale}${path}`,
        lastModified: new Date()
      });
    }
  }

  return entries;
}

import * as React from 'react';
import {NextIntlClientProvider} from 'next-intl';
import {getMessages, getTranslations, setRequestLocale} from 'next-intl/server';
import type {Metadata} from 'next';
import {routing, type AppLocale} from '@/i18n/routing';
import {SiteShell} from '@/components/layout/SiteShell';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export async function generateMetadata({params}: {params: {locale: AppLocale}}): Promise<Metadata> {
  const {locale} = params;
  const tSite = await getTranslations({locale, namespace: 'site'});

  return {
    title: `${tSite('name')} — Renaissance Kingdoms`,
    description: tSite('tagline'),
    openGraph: {
      title: `${tSite('name')} — Renaissance Kingdoms`,
      description: tSite('tagline'),
      type: 'website'
    }
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: {locale: AppLocale};
}) {
  const {locale} = params;
  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <SiteShell>{children}</SiteShell>
    </NextIntlClientProvider>
  );
}

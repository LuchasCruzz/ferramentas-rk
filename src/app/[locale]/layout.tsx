import * as React from 'react';
import {NextIntlClientProvider} from 'next-intl';
import {getMessages, getTranslations, setRequestLocale} from 'next-intl/server';
import type {Metadata} from 'next';
import {routing, type AppLocale} from '@/i18n/routing';
import {SiteShell} from '@/components/layout/SiteShell';

type LocaleParams = {locale: AppLocale};
type Awaitable<T> = T | Promise<T>;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export async function generateMetadata({
  params
}: {
  params: Awaitable<LocaleParams>;
}): Promise<Metadata> {
  const {locale} = await Promise.resolve(params);
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
  params: Awaitable<LocaleParams>;
}) {
  const {locale} = await Promise.resolve(params);
  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <SiteShell>{children}</SiteShell>
    </NextIntlClientProvider>
  );
}

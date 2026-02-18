import {setRequestLocale} from 'next-intl/server';
import type {AppLocale} from '@/i18n/routing';
import {HomeClient} from '@/components/home/HomeClient';

export default function HomePage({params}: {params: {locale: AppLocale}}) {
  setRequestLocale(params.locale);
  return <HomeClient />;
}

import {setRequestLocale} from 'next-intl/server';
import type {AppLocale} from '@/i18n/routing';
import {HomeClient} from '@/components/home/HomeClient';

type Params = {locale: AppLocale};
type Props = {params: Params | Promise<Params>};

export default async function HomePage({params}: Props) {
  const {locale} = await Promise.resolve(params);
  setRequestLocale(locale);
  return <HomeClient />;
}

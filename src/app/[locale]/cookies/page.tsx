import {setRequestLocale} from 'next-intl/server';
import type {AppLocale} from '@/i18n/routing';
import {useTranslations} from 'next-intl';

export default function CookiesPage({params}: {params: {locale: AppLocale}}) {
  setRequestLocale(params.locale);
  const t = useTranslations('pages');

  return (
    <div className="parchment rounded-3xl p-6 shadow-parchment">
      <h1 className="text-2xl font-black tracking-tight">{t('cookiesTitle')}</h1>
      <p className="mt-3 text-sm text-black/75">{t('cookiesBody')}</p>
    </div>
  );
}

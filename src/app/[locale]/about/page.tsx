import {setRequestLocale} from 'next-intl/server';
import type {AppLocale} from '@/i18n/routing';
import {useTranslations} from 'next-intl';

export default function AboutPage({params}: {params: {locale: AppLocale}}) {
  setRequestLocale(params.locale);
  const t = useTranslations('pages');

  return (
    <div className="parchment rounded-3xl p-6 shadow-parchment">
      <h1 className="text-2xl font-black tracking-tight">{t('aboutTitle')}</h1>
      <p className="mt-3 text-sm text-black/75">{t('aboutBody')}</p>
      <div className="mt-5 text-xs text-black/60">
        Disclaimer: this project references the official RK Wiki as a knowledge source and does not copy proprietary game
        assets.
      </div>
    </div>
  );
}

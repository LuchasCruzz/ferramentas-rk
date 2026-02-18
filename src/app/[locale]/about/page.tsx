import {setRequestLocale, getTranslations} from 'next-intl/server';
import type {AppLocale} from '@/i18n/routing';

type Params = {locale: AppLocale};
type Props = {params: Params | Promise<Params>};

export default async function AboutPage({params}: Props) {
  const {locale} = await Promise.resolve(params);
  setRequestLocale(locale);

  const t = await getTranslations({locale, namespace: 'pages'});

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

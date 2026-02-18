import {setRequestLocale, getTranslations} from 'next-intl/server';
import type {AppLocale} from '@/i18n/routing';

type Params = {locale: AppLocale};
type Props = {params: Params | Promise<Params>};

export default async function PrivacyPage({params}: Props) {
  const {locale} = await Promise.resolve(params);
  setRequestLocale(locale);

  const t = await getTranslations({locale, namespace: 'pages'});

  return (
    <div className="parchment rounded-3xl p-6 shadow-parchment">
      <h1 className="text-2xl font-black tracking-tight">{t('privacyTitle')}</h1>
      <p className="mt-3 text-sm text-black/75">{t('privacyBody')}</p>
      <div className="mt-5 text-xs text-black/60">
        Note: replace this base text with your final policy if needed (especially after enabling AdSense).
      </div>
    </div>
  );
}

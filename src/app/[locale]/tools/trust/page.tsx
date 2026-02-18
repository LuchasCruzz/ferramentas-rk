import {setRequestLocale, getTranslations} from 'next-intl/server';
import type {AppLocale} from '@/i18n/routing';
import {ToolHeader} from '@/components/tools/ToolHeader';
import {TrustTool} from '@/components/tools/TrustTool';

export default async function Page({params}: {params: {locale: AppLocale}}) {
  setRequestLocale(params.locale);
  const tMod = await getTranslations({locale: params.locale, namespace: 'modules'});
  return (
    <div>
      <ToolHeader
        title={tMod('trust.title')}
        description={tMod('trust.desc')}
        wikiUrl="https://www.wiki.renaissancekingdoms.com/en/Trust"
      />
      <TrustTool />
    </div>
  );
}

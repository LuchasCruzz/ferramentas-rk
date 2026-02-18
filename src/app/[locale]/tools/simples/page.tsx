import {setRequestLocale, getTranslations} from 'next-intl/server';
import type {AppLocale} from '@/i18n/routing';
import {ToolHeader} from '@/components/tools/ToolHeader';
import {SimplesTool} from '@/components/tools/SimplesTool';

export default async function Page({params}: {params: {locale: AppLocale}}) {
  setRequestLocale(params.locale);
  const tMod = await getTranslations({locale: params.locale, namespace: 'modules'});
  return (
    <div>
      <ToolHeader
        title={tMod('simples.title')}
        description={tMod('simples.desc')}
        wikiUrl="https://wiki.renaissancekingdoms.com/en/Simples"
      />
      <SimplesTool />
    </div>
  );
}

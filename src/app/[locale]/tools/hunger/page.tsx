import {setRequestLocale, getTranslations} from 'next-intl/server';
import type {AppLocale} from '@/i18n/routing';
import {ToolHeader} from '@/components/tools/ToolHeader';
import {HungerTool} from '@/components/tools/HungerTool';

export default async function Page({params}: {params: {locale: AppLocale}}) {
  setRequestLocale(params.locale);
  const tMod = await getTranslations({locale: params.locale, namespace: 'modules'});
  return (
    <div>
      <ToolHeader
        title={tMod('hunger.title')}
        description={tMod('hunger.desc')}
        wikiUrl="https://wiki.renaissancekingdoms.com/en/Hunger"
      />
      <HungerTool />
    </div>
  );
}

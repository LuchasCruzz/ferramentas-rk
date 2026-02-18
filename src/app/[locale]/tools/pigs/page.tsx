import {setRequestLocale, getTranslations} from 'next-intl/server';
import type {AppLocale} from '@/i18n/routing';
import {ToolHeader} from '@/components/tools/ToolHeader';
import {PigsTool} from '@/components/tools/PigsTool';

export default async function Page({params}: {params: {locale: AppLocale}}) {
  setRequestLocale(params.locale);
  const tMod = await getTranslations({locale: params.locale, namespace: 'modules'});
  return (
    <div>
      <ToolHeader
        title={tMod('pigs.title')}
        description={tMod('pigs.desc')}
        wikiUrl="https://wiki.renaissancekingdoms.com/en/Pig_field"
      />
      <PigsTool />
    </div>
  );
}

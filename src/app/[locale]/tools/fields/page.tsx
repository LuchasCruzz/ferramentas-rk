import {setRequestLocale, getTranslations} from 'next-intl/server';
import type {AppLocale} from '@/i18n/routing';
import {ToolHeader} from '@/components/tools/ToolHeader';
import {FieldsTool} from '@/components/tools/FieldsTool';

export default async function Page({params}: {params: {locale: AppLocale}}) {
  setRequestLocale(params.locale);
  const tMod = await getTranslations({locale: params.locale, namespace: 'modules'});
  return (
    <div>
      <ToolHeader
        title={tMod('fields.title')}
        description={tMod('fields.desc')}
        wikiUrl="https://www.wiki.renaissancekingdoms.com/en/Corn_field"
      />
      <FieldsTool />
    </div>
  );
}

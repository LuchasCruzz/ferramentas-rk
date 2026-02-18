import {setRequestLocale, getTranslations} from 'next-intl/server';
import type {AppLocale} from '@/i18n/routing';
import {ToolHeader} from '@/components/tools/ToolHeader';
import {TrustTool} from '@/components/tools/TrustTool';

type Params = {locale: AppLocale};
type Props = {params: Params | Promise<Params>};

export default async function Page({params}: Props) {
  const {locale} = await Promise.resolve(params);
  setRequestLocale(locale);

  const tMod = await getTranslations({locale, namespace: 'modules'});
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

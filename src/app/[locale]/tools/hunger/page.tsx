import {setRequestLocale, getTranslations} from 'next-intl/server';
import type {AppLocale} from '@/i18n/routing';
import {ToolHeader} from '@/components/tools/ToolHeader';
import {HungerTool} from '@/components/tools/HungerTool';

type Params = {locale: AppLocale};
type Props = {params: Params | Promise<Params>};

export default async function Page({params}: Props) {
  const {locale} = await Promise.resolve(params);
  setRequestLocale(locale);

  const tMod = await getTranslations({locale, namespace: 'modules'});
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

import {setRequestLocale, getTranslations} from 'next-intl/server';
import type {AppLocale} from '@/i18n/routing';
import {ToolHeader} from '@/components/tools/ToolHeader';
import {SimplesTool} from '@/components/tools/SimplesTool';

type Params = {locale: AppLocale};
type Props = {params: Params | Promise<Params>};

export default async function Page({params}: Props) {
  const {locale} = await Promise.resolve(params);
  setRequestLocale(locale);

  const tMod = await getTranslations({locale, namespace: 'modules'});
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

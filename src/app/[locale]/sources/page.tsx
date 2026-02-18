import {setRequestLocale} from 'next-intl/server';
import type {AppLocale} from '@/i18n/routing';
import {sources} from '@/data/sources';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/Card';
import {useTranslations} from 'next-intl';

import {LinkButton} from '@/components/ui/LinkButton';

export default function SourcesPage({params}: {params: {locale: AppLocale}}) {
  setRequestLocale(params.locale);
  const t = useTranslations('pages');
  const c = useTranslations('common');

  return (
    <div>
      <div className="parchment rounded-3xl p-5 shadow-parchment">
        <h1 className="text-2xl font-black tracking-tight">{t('sourcesTitle')}</h1>
        <p className="mt-2 text-sm text-black/75">{t('sourcesIntro')}</p>
      </div>

      <div className="mt-5 grid gap-4">
        {sources.map((s) => (
          <Card key={s.url}>
            <CardHeader>
              <CardTitle>{s.title}</CardTitle>
              <div className="mt-1 text-xs text-black/60">{s.section}</div>
            </CardHeader>
            <CardContent>
              <LinkButton href={s.url} target="_blank" rel="noreferrer">
                Open on Wiki
              </LinkButton>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

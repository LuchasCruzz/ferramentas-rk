import * as React from 'react';
import {Badge} from '@/components/ui/Badge';
import {LinkButton} from '@/components/ui/LinkButton';
import {useTranslations} from 'next-intl';

export function ToolHeader({
  title,
  description,
  wikiUrl
}: {
  title: string;
  description: string;
  wikiUrl: string;
}) {
  const t = useTranslations('common');

  return (
    <div className="mb-4">
      <div className="flex flex-wrap items-center gap-2">
        <h1 className="text-2xl font-black tracking-tight">{title}</h1>
        <Badge className="text-black/70">MVP</Badge>
      </div>
      <p className="mt-2 max-w-2xl text-sm text-black/75">{description}</p>
      <div className="mt-3">
        <LinkButton href={wikiUrl} target="_blank" rel="noreferrer">
          {t('openWiki')}
        </LinkButton>
      </div>
    </div>
  );
}

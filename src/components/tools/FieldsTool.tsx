import * as React from 'react';
import {useTranslations} from 'next-intl';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/Card';
import {Badge} from '@/components/ui/Badge';

export function FieldsTool() {
  const t = useTranslations('tools.fields');

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>{t('cornTitle')}</CardTitle>
          <div className="mt-2 text-xs text-black/65">
            <Badge className="mr-2">{t('yieldPending')}</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <ol className="list-decimal space-y-2 pl-5 text-sm text-black/80">
            <li>{t('cornDay1')}</li>
            <li>{t('cornDays2_6')}</li>
            <li>{t('cornDay7')}</li>
          </ol>
          <div className="mt-4 text-xs text-black/60">
            Source: Corn_field article (cycle + quality + yield section contains "??" for yield ranges).
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>{t('wheatTitle')}</CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="list-decimal space-y-2 pl-5 text-sm text-black/80">
            <li>{t('wheatDay1')}</li>
            <li>{t('wheatDays2_9')}</li>
            <li>{t('wheatDay10')}</li>
          </ol>
          <div className="mt-4 text-xs text-black/60">
            Source: Wheat_field article (cycle day 1..10).
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

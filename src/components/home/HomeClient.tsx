'use client';

import * as React from 'react';
import {useTranslations} from 'next-intl';
import {moduleOrder, moduleRoutes, type ModuleKey} from '@/components/tools/modules';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/Card';
import {Input} from '@/components/ui/Input';
import {Link} from '@/i18n/navigation';

export function HomeClient() {
  const t = useTranslations();
  const [q, setQ] = React.useState('');

  const items = moduleOrder
    .map((k) => ({
      key: k,
      title: t(`modules.${k}.title` as any) as string,
      desc: t(`modules.${k}.desc` as any) as string,
      href: moduleRoutes[k]
    }))
    .filter((m) => {
      const needle = q.trim().toLowerCase();
      if (!needle) return true;
      return (m.title + ' ' + m.desc).toLowerCase().includes(needle);
    });

  return (
    <div>
      <div className="parchment rounded-3xl p-5 shadow-parchment">
        <h1 className="text-2xl font-black tracking-tight">{t('home.headline')}</h1>
        <p className="mt-2 text-sm text-black/75">{t('home.sub')}</p>

        <div className="mt-4">
          <label className="text-xs font-semibold text-black/70" htmlFor="search">
            {t('common.search')}
          </label>
          <div className="mt-2">
            <Input
              id="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="hunger, trust, pigs…"
            />
          </div>
          <div className="mt-2 text-xs text-black/60">{t('common.desktopNote')}</div>
        </div>
      </div>

      <div className="mt-5">
        <div className="mb-2 text-sm font-semibold">{t('home.cardsTitle')}</div>
        {items.length === 0 ? (
          <div className="parchment rounded-3xl p-5 text-sm text-black/70">{t('home.noResults')}</div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {items.map((m) => (
              <Card key={m.key}>
                <CardHeader>
                  <CardTitle>{m.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-black/75">{m.desc}</p>
                  <div className="mt-4">
                    <Link
                      href={m.href}
                      className="rounded-full border border-black/15 bg-white/40 px-4 py-2 text-sm font-semibold hover:bg-black/5"
                    >
                      {t('common.learnMore')}
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

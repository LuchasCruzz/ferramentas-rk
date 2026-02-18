'use client';

import * as React from 'react';
import {useTranslations} from 'next-intl';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/Card';
import {Button} from '@/components/ui/Button';
import {Badge} from '@/components/ui/Badge';

type Role = 'beginner' | 'advanced';

const FOODS = [
  {key: 'bread', points: 2},
  {key: 'milk', points: 1},
  {key: 'fruit', points: 1}
] as const;

export function HungerTool() {
  const t = useTranslations('tools.hunger');
  const [role, setRole] = React.useState<Role>('beginner');
  const [selected, setSelected] = React.useState<Record<string, number>>({bread: 0, milk: 0, fruit: 0});

  const target = role === 'beginner' ? 2 : 3;
  const total = FOODS.reduce((sum, f) => sum + (selected[f.key] ?? 0) * f.points, 0);

  function inc(k: string) {
    setSelected((s) => ({...s, [k]: (s[k] ?? 0) + 1}));
  }
  function dec(k: string) {
    setSelected((s) => ({...s, [k]: Math.max(0, (s[k] ?? 0) - 1)}));
  }
  function reset() {
    setSelected({bread: 0, milk: 0, fruit: 0});
  }

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>{t('pointsTitle')}</CardTitle>
          <div className="mt-2 text-sm text-black/70">{t('roleLabel')}</div>
          <div className="mt-3 grid gap-2">
            <button
              onClick={() => setRole('beginner')}
              className={`rounded-2xl border px-4 py-3 text-left text-sm ${
                role === 'beginner' ? 'border-black/30 bg-white/45' : 'border-black/10 bg-white/20'
              }`}
            >
              <div className="font-semibold">{t('roleBeginner')}</div>
            </button>
            <button
              onClick={() => setRole('advanced')}
              className={`rounded-2xl border px-4 py-3 text-left text-sm ${
                role === 'advanced' ? 'border-black/30 bg-white/45' : 'border-black/10 bg-white/20'
              }`}
            >
              <div className="font-semibold">{t('roleAdvanced')}</div>
            </button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="ornate-divider mb-3" />
          <div className="text-sm text-black/70">
            Target: <span className="font-semibold">{target}</span>
            <span className="ml-2">hunger points/day</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>{t('foodTitle')}</CardTitle>
          <div className="mt-2 text-sm text-black/70">{t('chooseLabel')}</div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-2">
            {FOODS.map((f) => (
              <div key={f.key} className="flex items-center justify-between rounded-2xl border border-black/10 bg-white/25 px-3 py-2">
                <div className="text-sm">
                  <div className="font-semibold">{t(`foods.${f.key}` as any)}</div>
                  <div className="text-xs text-black/60">{f.points} pts each</div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" onClick={() => dec(f.key)} aria-label={`decrease ${f.key}`} className="h-9 w-9 px-0">
                    −
                  </Button>
                  <Badge className="min-w-10 justify-center">{selected[f.key] ?? 0}</Badge>
                  <Button variant="ghost" onClick={() => inc(f.key)} aria-label={`increase ${f.key}`} className="h-9 w-9 px-0">
                    +
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-between rounded-2xl border border-black/10 bg-white/30 px-4 py-3">
            <div>
              <div className="text-sm font-semibold">{t('resultTitle')}</div>
              <div className="text-xs text-black/60">{total} / {target}</div>
            </div>
            <Badge className={total >= target ? 'bg-black/10' : ''}>{total >= target ? 'OK' : '…'}</Badge>
          </div>

          <div className="mt-3 flex justify-end">
            <Button variant="ghost" onClick={reset}>
              {t('reset')}
            </Button>
          </div>

          <div className="mt-4">
            <div className="text-sm font-semibold">{t('tipsTitle')}</div>
            <div className="mt-1 text-xs text-black/70">{t('tipHealth')}</div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

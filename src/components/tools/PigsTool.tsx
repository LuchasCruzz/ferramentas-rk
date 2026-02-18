import * as React from 'react';
import {useTranslations} from 'next-intl';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/Card';

const STAGES = [
  {stage: 'Dying', yield: 0},
  {stage: 'Bony', yield: 1},
  {stage: 'Skinny', yield: 2},
  {stage: 'Normal', yield: 3},
  {stage: 'Fleshy', yield: 4},
  {stage: 'Plump', yield: 5},
  {stage: 'Fat', yield: 6},
  {stage: 'Obese', yield: 7},
  {stage: 'American style', yield: 8}
];

const LIFE = [
  {days: '10 days', prob: '2%'},
  {days: '11 days', prob: '3%'},
  {days: '12 days', prob: '15%'},
  {days: '13 days', prob: '22%'},
  {days: '14 days', prob: '25%'},
  {days: '15 days', prob: '30%'},
  {days: '> 15 days', prob: '35%'}
];

export function PigsTool() {
  const t = useTranslations('tools.pigs');

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>{t('feedingTitle')}</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc space-y-2 pl-5 text-sm text-black/80">
            <li>{t('grass')}</li>
            <li>{t('corn')}</li>
          </ul>
          <div className="mt-4 text-xs text-black/60">
            Notes (Wiki): only one pig can be slaughtered per day; knife must be in property inventory.
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>{t('growthTitle')}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-hidden rounded-2xl border border-black/10 bg-white/20">
            <table className="w-full text-sm">
              <thead className="bg-black/5 text-left">
                <tr>
                  <th className="px-3 py-2">Stage</th>
                  <th className="px-3 py-2">Half-cwt of pork</th>
                </tr>
              </thead>
              <tbody>
                {STAGES.map((r) => (
                  <tr key={r.stage} className="border-t border-black/10">
                    <td className="px-3 py-2">{r.stage}</td>
                    <td className="px-3 py-2 font-semibold">{r.yield}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-3 text-xs text-black/70">{t('note15')}</div>

          <div className="mt-4 text-sm font-semibold">Life expectancy (death probability)</div>
          <div className="mt-2 overflow-hidden rounded-2xl border border-black/10 bg-white/20">
            <table className="w-full text-sm">
              <thead className="bg-black/5 text-left">
                <tr>
                  <th className="px-3 py-2">Age</th>
                  <th className="px-3 py-2">Chance</th>
                </tr>
              </thead>
              <tbody>
                {LIFE.map((r) => (
                  <tr key={r.days} className="border-t border-black/10">
                    <td className="px-3 py-2">{r.days}</td>
                    <td className="px-3 py-2 font-semibold">{r.prob}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 text-xs text-black/60">Source: Pig_field article (Animal feeding, Growth, Life expectancy).</div>
        </CardContent>
      </Card>
    </div>
  );
}

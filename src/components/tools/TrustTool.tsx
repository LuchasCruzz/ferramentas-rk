import * as React from 'react';
import {useTranslations} from 'next-intl';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/Card';

export function TrustTool() {
  const t = useTranslations('tools.trust');

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>{t('giveTitle')}</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc space-y-2 pl-5 text-sm text-black/80">
            <li>{t('base')}</li>
            <li>{t('cha')}</li>
          </ul>

          <div className="mt-4 text-xs text-black/60">
            Source: Trust article + Charisma article (weekly granting and charisma cap).
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>{t('receivableTitle')}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-hidden rounded-2xl border border-black/10 bg-white/20">
            <table className="w-full text-sm">
              <thead className="bg-black/5 text-left">
                <tr>
                  <th className="px-3 py-2">Level range</th>
                  <th className="px-3 py-2">Max trust receivable</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-black/10">
                  <td className="px-3 py-2">{t('cap0_10')}</td>
                  <td className="px-3 py-2 font-semibold">3</td>
                </tr>
                <tr className="border-t border-black/10">
                  <td className="px-3 py-2">{t('cap11_30')}</td>
                  <td className="px-3 py-2 font-semibold">17</td>
                </tr>
                <tr className="border-t border-black/10">
                  <td className="px-3 py-2">{t('cap31_50')}</td>
                  <td className="px-3 py-2 font-semibold">30</td>
                </tr>
                <tr className="border-t border-black/10">
                  <td className="px-3 py-2">{t('cap51_250')}</td>
                  <td className="px-3 py-2 font-semibold">40</td>
                </tr>
                <tr className="border-t border-black/10">
                  <td className="px-3 py-2">{t('cap251')}</td>
                  <td className="px-3 py-2 font-semibold">200</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-5 text-sm font-semibold">{t('reputationTitle')}</div>
          <div className="mt-2 text-sm text-black/75">{t('reqTitle')}</div>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-black/80">
            <li>{t('lvl3')}</li>
            <li>{t('lvl4')}</li>
            <li>{t('lvl5')}</li>
            <li>{t('lvl6')}</li>
            <li>{t('max255')}</li>
          </ul>

          <div className="mt-4 text-xs text-black/60">Source: Reputation article (level requirements) + Trust article (trust points).</div>
        </CardContent>
      </Card>
    </div>
  );
}

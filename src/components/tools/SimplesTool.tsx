import * as React from 'react';
import {useTranslations} from 'next-intl';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/Card';
import {Badge} from '@/components/ui/Badge';

const INT_COLS = ['< 50', '50–100', '100–150', '150–200', '200–250', '> 250'];

const TABLE_0 = [
  {label: '2h / 10 AP', values: [3, 3, 3, 3, 4, 4]},
  {label: '6h / 30 AP', values: [7, 7, 7, 7, 8, 8]},
  {label: '12h / 60 AP', values: [12, 12, 13, 13, 14, 14]},
  {label: '22h / 100 AP', values: [20, 21, 22, 23, 24, 25]}
];

const TABLE_9 = [
  {label: '2h / 10 AP', values: [5, 5, 5, 5, 5, 5]},
  {label: '6h / 30 AP', values: [12, 12, 12, 12, 13, 13]},
  {label: '12h / 60 AP', values: [22, 22, 23, 23, 24, 24]},
  {label: '22h / 100 AP', values: [40, 41, 42, 43, 44, 45]}
];

export function SimplesTool() {
  const t = useTranslations('tools.simples');

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>{t('durTitle')}</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc space-y-2 pl-5 text-sm text-black/80">
            <li>{t('web')}</li>
            <li>{t('app')}</li>
          </ul>
          <div className="mt-4 text-xs text-black/70">{t('note')}</div>
          <div className="mt-3 text-xs text-black/60">Source: Simples article (Collecting medicinal herbs).</div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>{t('prodTitle')}</CardTitle>
          <div className="mt-2 text-xs text-black/70">
            <Badge>Max values only</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-sm font-semibold">0 scholastic skills at 100%</div>
          <Table rows={TABLE_0} />
          <div className="mt-4 text-sm font-semibold">9 scholastic skills at 100%</div>
          <Table rows={TABLE_9} />

          <div className="mt-3 text-xs text-black/60">
            Source: Simples article (Productivity maximum table). Warning: intermediate states between 0 and 9 skills are not shown in the Wiki table.
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function Table({rows}: {rows: {label: string; values: number[]}[]}) {
  return (
    <div className="mt-2 overflow-x-auto rounded-2xl border border-black/10 bg-white/20">
      <table className="min-w-[560px] w-full text-sm">
        <thead className="bg-black/5 text-left">
          <tr>
            <th className="px-3 py-2">Duration</th>
            {INT_COLS.map((c) => (
              <th key={c} className="px-3 py-2">{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.label} className="border-t border-black/10">
              <td className="px-3 py-2 font-semibold">{r.label}</td>
              {r.values.map((v, i) => (
                <td key={i} className="px-3 py-2">{v}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

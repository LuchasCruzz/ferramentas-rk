import * as React from 'react';
import {useTranslations} from 'next-intl';

export function AdPlaceholder({
  width,
  height,
  label
}: {
  width: number | string;
  height: number | string;
  label?: string;
}) {
  const t = useTranslations('ads');
  return (
    <div
      className="parchment flex items-center justify-center rounded-2xl border border-dashed border-black/25 text-center text-xs text-black/70"
      style={{width, height}}
      role="note"
      aria-label={label ?? t('placeholderTitle')}
    >
      <div className="p-3">
        <div className="font-semibold">{t('placeholderTitle')}</div>
        <div className="mt-1">{t('placeholderBody')}</div>
        <div className="mt-2 opacity-70">
          {typeof width === 'number' ? `${width}px` : width} × {typeof height === 'number' ? `${height}px` : height}
        </div>
      </div>
    </div>
  );
}

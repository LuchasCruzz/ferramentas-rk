import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';

export default function NotFound() {
  const t = useTranslations('common');

  return (
    <div className="parchment rounded-3xl p-6">
      <h1 className="text-2xl font-black">404</h1>
      <p className="mt-2 text-sm text-black/75">Page not found.</p>
      <div className="mt-4">
        <Link href="/" className="rounded-full border border-black/15 bg-white/40 px-4 py-2 text-sm font-semibold hover:bg-black/5">
          {t('backHome')}
        </Link>
      </div>
    </div>
  );
}

import * as React from 'react';
import {Link} from '@/i18n/navigation';

type Props = React.ComponentProps<typeof Link> & {className?: string};

export function LinkButton({className = '', ...rest}: Props) {
  return (
    <Link
      className={`inline-flex items-center justify-center gap-2 rounded-full border border-black/15 bg-white/40 px-4 py-2 text-sm font-semibold hover:bg-black/5 ${className}`}
      {...rest}
    />
  );
}

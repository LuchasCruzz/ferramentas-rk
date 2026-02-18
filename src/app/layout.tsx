import './globals.css';
import type {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Ferramentas RK / RK Tools',
  description: 'Wiki-based helpers for Renaissance Kingdoms players.',
  icons: {icon: '/favicon.svg'}
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

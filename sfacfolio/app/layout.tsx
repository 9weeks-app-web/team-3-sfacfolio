import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Provider from './components/Provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SFACFOLIO',
  description: '스팩폴리오',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ko'>
      <body className={inter.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}

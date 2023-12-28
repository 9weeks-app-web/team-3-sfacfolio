import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '@/style/globals.css';
import Provider from './components/Provider';

const pretendard = localFont({
  src: [
    {
      path: '../public/fonts/PretendardVariable.woff2',
    },
  ],
  variable: '--font-pretandard',
});

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
      <body className={`${pretendard.variable} font-pretendard`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '@/style/globals.css';
import Provider from './components/Provider';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

const pretendard = localFont({
  src: [
    {
      path: '../public/fonts/PretendardVariable.woff2',
    },
  ],
  variable: '--font-pretendard',
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
        <Header />
        <Provider>
          <main className='h-full pb-[68px] pt-[105px]'>{children}</main>
        </Provider>
        <Footer />
      </body>
    </html>
  );
}

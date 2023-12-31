import Footer from '@/components/Footer';
import HomeHeader from '@/components/HomeHeader';
import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Source_Sans_3 } from 'next/font/google';

const source_sans_3 = Source_Sans_3({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={source_sans_3.className}>
        <HomeHeader />
        {children}
        <div id='modal'></div>
        <Footer />
      </body>
    </html>
  );
}

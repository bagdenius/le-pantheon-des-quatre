import type { Metadata } from 'next';
import '@/app/_styles/globals.css';
import Header from './_components/Header';
import Footer from './_components/Footer';
import { Cormorant_Garamond } from 'next/font/google';

export const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    template: '%s - NOTTE STELLATA',
    default: 'welcome - notte stellata',
  },
  description:
    'Discover Notte Stellata, a luxury French fine dining restaurant where timeless elegance meets culinary artistry. Indulge in exquisite dishes, curated wines, and an unforgettable starry-night atmosphere.',
  keywords: [
    'Notte Stellata restaurant',
    'luxury French dining',
    'fine dining experience',
    'gourmet French cuisine',
    'French restaurant',
    'romantic dinner restaurant',
    'wine and fine dining',
    'upscale French cuisine',
    'best luxury restaurant',
    'starry night dining',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${cormorantGaramond.className} flex flex-col min-h-dvh max-w-dvw text-base text-primary-extradark`}
      >
        <Header />
        <main className='pt-20'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

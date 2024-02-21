import type { Metadata } from 'next';
import { Nanum_Gothic, Inter, Syne, Poppins } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/context/theme-provider';
import { Footer, Header } from '@/components/navigation';
import { ScrollArea, ScrollBar } from '@/components/ui';

const inter = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});
const nanum = Nanum_Gothic({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
  variable: '--font-nanum',
});
const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
});
export const metadata: Metadata = {
  title: 'Artseum',
  description: '',
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/images/icon-light.svg',
        href: '/images/icon-light.svg',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/images/icon-dark.svg',
        href: '/images/icon-dark.svg',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${inter.className} ${nanum.variable} ${syne.variable}`}>
        <ThemeProvider
          attribute='class'
          defaultTheme='light'
          enableSystem
          disableTransitionOnChange>
          <ScrollArea className='scroll-smooth'>
            <ScrollBar orientation='vertical' />
            <main className='h-screen w-screen bg-background text-foreground'>
              <Header />
              {children}
              <Footer />
            </main>
          </ScrollArea>
        </ThemeProvider>
      </body>
    </html>
  );
}

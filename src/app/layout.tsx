import { Roboto } from 'next/font/google';
import '@/style/globals.css';
import NextTopLoader from 'nextjs-toploader';

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${roboto.variable} antialiased min-h-dvh flex justify-center`}
      >
        <NextTopLoader color='#2b7fff' showSpinner={false} />
        {children}
      </body>
    </html>
  );
}

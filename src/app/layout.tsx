import type { Metadata } from 'next';
import { Funnel_Display, Outfit } from 'next/font/google';
import './globals.css';

const funnelDisplay = Funnel_Display({
  variable: '--font-funnel-display',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
});

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Sean Donny Art Giveaway 2025',
  description:
    'Stylish display of results from the July 2025 Sean Donny Art Giveaway',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${funnelDisplay.variable} ${outfit.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

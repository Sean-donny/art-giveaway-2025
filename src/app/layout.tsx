import type { Metadata, Viewport } from 'next';
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

export const viewport: Viewport = {
  themeColor: '#0200f3',
};

const commonMetadataFields = {
  title: 'Sean Donny Art Giveaway 2025',
  description:
    'A stylish display of results from the July 2025 Sean Donny Art Giveaway.',
  image: 'https://seandonny.com/default_social_card.jpg',
};

export const metadata: Metadata = {
  title: commonMetadataFields.title,
  description: commonMetadataFields.description,
  keywords: ['Sean Donny', 'Art Giveaway', 'sean.donny', 'Art'],
  authors: [{ name: 'Sean Donny', url: 'https://seandonny.com' }],
  creator: 'Sean Donny',

  openGraph: {
    title: commonMetadataFields.title,
    description: commonMetadataFields.description,
    siteName: commonMetadataFields.title,
    images: [
      {
        url: commonMetadataFields.image,
        width: 1200,
        height: 628,
        alt: 'Sean Donny Social Image',
      },
    ],
    locale: 'en_GB',
    type: 'article',
  },

  twitter: {
    card: 'summary_large_image',
    site: '@site',
    creator: '@blvvvckfire',
    images: commonMetadataFields.image,
    title: commonMetadataFields.title,
    description: commonMetadataFields.description,
  },
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

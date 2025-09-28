import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Alexandre Dubois - Développeur Web3 Fullstack',
  description: 'Portfolio d\'Alexandre Dubois, développeur Web3 fullstack spécialisé blockchain Ethereum avec 15 ans d\'expérience en architecture logicielle.',
  keywords: ['Web3', 'Blockchain', 'Ethereum', 'Solidity', 'DeFi', 'Smart Contracts', 'React', 'Next.js', 'TypeScript'],
  authors: [{ name: 'Alexandre Dubois' }],
  creator: 'Alexandre Dubois',
  publisher: 'Alexandre Dubois',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://alexandre-dubois.dev'),
  openGraph: {
    title: 'Alexandre Dubois - Développeur Web3 Fullstack',
    description: 'Développeur Web3 fullstack spécialisé blockchain Ethereum avec 15 ans d\'expérience en architecture logicielle.',
    url: 'https://alexandre-dubois.dev',
    siteName: 'Alexandre Dubois Portfolio',
    images: [
      {
        url: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alexandre Dubois - Développeur Web3 Fullstack',
    description: 'Développeur Web3 fullstack spécialisé blockchain Ethereum avec 15 ans d\'expérience en architecture logicielle.',
    images: ['https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from 'sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Felicien Astier - Développeur Web3 Fullstack',
  description: 'Portfolio de Félicien Astier, développeur Web3 fullstack spécialisé blockchain Ethereum avec 15 ans d\'expérience en architecture logicielle.',
  keywords: ['Web3', 'Blockchain', 'Ethereum', 'Solidity', 'DeFi', 'Smart Contracts', 'React', 'Next.js', 'TypeScript'],
  authors: [{ name: 'Felicien Astier' }],
  creator: 'Felicien Astier',
  publisher: 'Felicien Astier',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://astier-felicien.dev'),
  openGraph: {
    title: 'Felicien Astier - Développeur Web3 Fullstack',
    description: 'Développeur Web3 fullstack spécialisé blockchain Ethereum avec 15 ans d\'expérience en architecture transverse.',
    url: 'https://astier-felicien.dev',
    siteName: 'Felicien Astier Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Felicien Astier - Développeur Web3 Fullstack',
    description: 'Développeur Web3 fullstack spécialisé blockchain Ethereum avec 15 ans d\'expérience en architecture logicielle.',
    images: ['/og-image.png'],
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
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
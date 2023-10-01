import './globals.css';
import type { Metadata } from 'next';
import { Lexend } from 'next/font/google';
import { UIProviders } from './ui-providers';

const lexend = Lexend({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'OrbiDAO - Powering on-Chain DAO Management on Solana',
  description:
    'OrbiDAO, an all-in-one solution for creating and managing Decentralized Autonomous Organizations (DAOs) on the Solana network. Offering full-on chain functions including voting and treasury management, it enables seamless DAO operations, from multisig entities to billion-dollar protocols.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={lexend.className}>
        <UIProviders>{children}</UIProviders>
      </body>
    </html>
  );
}

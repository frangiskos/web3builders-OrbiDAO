'use client';
import React, { Suspense } from 'react';
import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import dynamic from 'next/dynamic';
import './ConnectWalletButton.css';

const WalletMultiButtonDynamic = dynamic(
  async () => (await import('@solana/wallet-adapter-react-ui')).WalletMultiButton,
  { ssr: false }
);

export function ConnectWalletButton() {
  return (
    <WalletModalProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <WalletMultiButtonDynamic />
      </Suspense>
    </WalletModalProvider>
  );
}

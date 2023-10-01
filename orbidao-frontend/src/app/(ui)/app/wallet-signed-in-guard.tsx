'use client';
import { ConnectWalletButton } from '@/components/ui/ConnectWalletButton';
import { useWallet } from '@solana/wallet-adapter-react';

export const WalletSignedInGuard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { publicKey } = useWallet();

  if (!publicKey) {
    return (
      <>
        <h1>Connect your wallet</h1>
        <ConnectWalletButton />
      </>
    );
  }

  return <>{children}</>;
};

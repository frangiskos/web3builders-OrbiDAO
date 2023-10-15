'use client';
import { ConnectWalletButton } from '@/components/ui/ConnectWalletButton';
import { Typography } from '@/components/ui/Typography';
import { useWallet } from '@solana/wallet-adapter-react';

export const WalletSignedInGuard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { publicKey } = useWallet();

  if (!publicKey) {
    return (
      <>
        <Typography as="h1" className="text-center mb-6">
          Connect your wallet
        </Typography>
        <div className="flex justify-center mt-6">
          <ConnectWalletButton />
        </div>
      </>
    );
  }

  return <>{children}</>;
};

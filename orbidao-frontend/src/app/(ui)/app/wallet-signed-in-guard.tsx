"use client";
import { ConnectWalletButton } from "@/components/ui/ConnectWalletButton";
import { Typography } from "@/components/ui/Typography";
import { useWallet } from "@solana/wallet-adapter-react";

export const WalletSignedInGuard: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { publicKey } = useWallet();

  if (!publicKey) {
    return (
      <>
        <Typography className="flex justify-center" as="h3">Connect your wallet</Typography>
        <div className="flex justify-center mt-4">
          <ConnectWalletButton />
        </div>
      </>
    );
  }

  return <>{children}</>;
};

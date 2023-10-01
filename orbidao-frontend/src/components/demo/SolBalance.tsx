import { FC, useEffect } from 'react';
import { useWallet, useConnection } from '@solana/wallet-adapter-react';
import useUserSOLBalanceStore from '../../stores/useUserSOLBalanceStore';

export const SolBalance: FC = ({}) => {
  const wallet = useWallet();
  const { connection } = useConnection();

  const balance = useUserSOLBalanceStore((s) => s.balance);
  const { getUserSOLBalance } = useUserSOLBalanceStore();

  useEffect(() => {
    if (wallet.publicKey) {
      console.log(wallet.publicKey.toBase58());
      getUserSOLBalance(wallet.publicKey, connection);
    }
  }, [wallet.publicKey, connection, getUserSOLBalance]);

  return (
    <>
      {/* {wallet.publicKey && <p>Public Key: {wallet.publicKey.toBase58()}</p>} */}
      {wallet && (balance || 0).toLocaleString()}
    </>
  );
};

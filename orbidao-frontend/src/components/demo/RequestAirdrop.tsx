import { Button } from '@/components/ui/Button';
import useUserSOLBalanceStore from '@/stores/useUserSOLBalanceStore';
import { notify } from '@/utils/notifications';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import type { TransactionSignature } from '@solana/web3.js';
import { LAMPORTS_PER_SOL } from '@solana/web3.js';
import type { FC } from 'react';
import React, { useCallback } from 'react';

const SOL_TO_AIRDROP = 0.2;

export const RequestAirdrop: FC = () => {
  const { connection } = useConnection();
  const { publicKey } = useWallet();
  const { getUserSOLBalance } = useUserSOLBalanceStore();

  const onClick = useCallback(async () => {
    if (!publicKey) {
      console.log('error', 'Wallet not connected!');
      notify({ type: 'error', message: 'error', description: 'Wallet not connected!' });
      return;
    }
    let signature: TransactionSignature | undefined = undefined;

    try {
      signature = await connection.requestAirdrop(publicKey, LAMPORTS_PER_SOL * SOL_TO_AIRDROP);

      // await connection.confirmTransaction(signature, 'processed');
      await connection.confirmTransaction(signature, 'confirmed');
      notify({ type: 'success', message: 'Airdrop successful!', txid: signature });

      getUserSOLBalance(publicKey, connection);
    } catch (error: any) {
      notify({ type: 'error', message: `Airdrop failed!`, description: error?.message, txid: signature });
      console.log('error', `Airdrop failed! ${error?.message}`, signature);
    }
  }, [publicKey, connection, getUserSOLBalance]);

  return (
    <div className="flex flex-col m-10 p-6 bg-gray-800">
      <span>Airdrop {SOL_TO_AIRDROP} SOL</span>
      <Button color="primary" onClick={onClick} isDisabled={!publicKey}>
        Request Airdrop
      </Button>
    </div>
  );
};

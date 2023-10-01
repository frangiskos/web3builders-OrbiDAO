import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Keypair, PublicKey, SystemProgram, Transaction, TransactionSignature } from '@solana/web3.js';
import { FC, useCallback } from 'react';
import { notify } from '../../utils/notifications';
import { Button } from '../ui/Button';
import bs58 from 'bs58';

export const SendTransaction: FC = () => {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();

  const onClick = useCallback(async () => {
    if (!publicKey) {
      notify({ type: 'error', message: `Wallet not connected!` });
      console.log('error', `Send Transaction: Wallet not connected!`);
      return;
    }

    // let toPublicKey = 'GDaKoZTQxaaci1Rwduyv1tYivh8Xb2VXMCS4TvkLovqK';
    // const bytes = bs58.decode(toPublicKey);
    // const newPublicKey = new PublicKey(bytes);

    let signature: TransactionSignature = '';
    try {
      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: publicKey,
          // toPubkey: newPublicKey,
          toPubkey: Keypair.generate().publicKey,
          lamports: 1,
        })
      );

      signature = await sendTransaction(transaction, connection);

      await connection.confirmTransaction(signature, 'confirmed');
      notify({ type: 'success', message: 'Transaction successful!', txid: signature });
    } catch (error: any) {
      notify({ type: 'error', message: `Transaction failed!`, description: error?.message, txid: signature });
      console.log('error', `Transaction failed! ${error?.message}`, signature);
      return;
    }
  }, [publicKey, connection, sendTransaction]);

  return (
    <div className="flex flex-col m-10 p-6 bg-gray-800">
      <span>Sample transaction</span>
      <Button color="primary" onClick={onClick} isDisabled={!publicKey}>
        <span> Send Transaction </span>
      </Button>
    </div>
  );
};

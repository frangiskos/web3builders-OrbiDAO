'use client';
import { RequestAirdrop } from '@/components/demo/RequestAirdrop';
import { SendTransaction } from '@/components/demo/SendTransaction';
import { SolBalance } from '@/components/demo/SolBalance';
import { SignMessage } from '@/components/demo/SignMessage';

export default function Page() {
  return (
    <main>
      <h1>App</h1>
      <RequestAirdrop />
      <SendTransaction />
      <SignMessage />
      <p>
        Balance: <SolBalance /> SOL
      </p>
    </main>
  );
}

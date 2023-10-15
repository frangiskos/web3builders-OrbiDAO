'use client';
import { RequestAirdrop } from '@/components/demo/RequestAirdrop';
import { SendTransaction } from '@/components/demo/SendTransaction';
import { SolBalance } from '@/components/demo/SolBalance';
import { SignMessage } from '@/components/demo/SignMessage';
import { Typography } from '@/components/ui/Typography';

export default function Page() {
  return (
    <main>
      <Typography as="h1" className="text-center mb-6">
        Blockchain transactions
      </Typography>
      <Typography as="h3" className="text-center mb-3">
        Balance: <SolBalance /> SOL
      </Typography>
      <div className="flex flex-row">
        <RequestAirdrop />
        <SendTransaction />
        <SignMessage />
      </div>
    </main>
  );
}

"use client";
import { RequestAirdrop } from "@/components/demo/RequestAirdrop";
import { SendTransaction } from "@/components/demo/SendTransaction";
import { SolBalance } from "@/components/demo/SolBalance";
import { SignMessage } from "@/components/demo/SignMessage";
import { Typography } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function Page() {
  return (
    <main>
      <Typography className="absolute top-0">
        Balance: <SolBalance /> SOL
      </Typography>
      <Typography as="h1" className="text-center mb-6">
        Welcome back DAOists
      </Typography>
      <div className="flex flex-row">
        <RequestAirdrop />
        <SendTransaction />
        <SignMessage />
      </div>
      <div className="absolute bottom-0 flex flex-row justify-between w-full mb-6">
        <Typography>Governance History</Typography>
        <Link href={"/app/dao-wizard"}>
          <Button>OrbiDAO Wizard</Button>
        </Link>
      </div>
    </main>
  );
}

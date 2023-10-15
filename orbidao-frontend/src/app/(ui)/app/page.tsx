"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Checkbox } from "@nextui-org/checkbox";
import { RequestAirdrop } from "@/components/demo/RequestAirdrop";
import { SendTransaction } from "@/components/demo/SendTransaction";
import { SolBalance } from "@/components/demo/SolBalance";
import { SignMessage } from "@/components/demo/SignMessage";
import { Typography } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function Page() {
  const router = useRouter();
  const [mintValue, setMint] = useState<boolean>(false);
  const onlocalStorageMint = (value: boolean) => {
    setMint(value);
    localStorage.setItem('mint', value?.toString());
  };

  const handleCreateDaoClick = () => {
    if (mintValue) router.push('app/dao/');
  }

  useEffect(() => {
    const localStorageValue = localStorage.getItem('mint') === 'true';
    setMint(localStorageValue);
  }, []);
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
      <div className="flex flex-col">
        <Checkbox className="mx-auto" isSelected={mintValue} onValueChange={onlocalStorageMint}>
          Mint the membership NFT to join OrbiDAO
        </Checkbox>
        <Button className="w-[50%] mt-4 mx-auto" variant="solid" roundness="full" onClick={handleCreateDaoClick} isFullWidth>
          Create a DAO
        </Button>
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

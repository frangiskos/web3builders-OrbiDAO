'use client';
import { Button } from '@/components/ui/Button';
import { Typography } from '@/components/ui/Typography';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export const MembershipGuard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter();
  const [mintValue, setMint] = useState<boolean>(false);

  const handleCreateDaoClick = () => {
    setMint(true);
    localStorage.setItem('mint', 'true');
    router.refresh();
  };

  useEffect(() => {
    const localStorageValue = localStorage.getItem('mint') === 'true';
    setMint(localStorageValue);
  }, []);

  if (!mintValue) {
    return (
      <>
        <Typography as="h1" className="text-center mb-6">
          Mint the membership NFT to join OrbiDAO
        </Typography>
        <div className="flex justify-center mt-6">
          <Button
            className="w-[50%] mt-4 mx-auto"
            variant="solid"
            roundness="full"
            onClick={handleCreateDaoClick}
            isFullWidth
          >
            Mint Membership NFT
          </Button>
        </div>
      </>
    );
  }

  return <>{children}</>;
};

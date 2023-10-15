'use client';
import { Typography } from '@/components/ui/Typography';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();
  router.push('/app');

  return (
    <div className="flex flex-row w-full justify-center">
      <div className="flex flex-col justify-center align-middle">
        <Typography as="h3" className="text-center">
          Governance escape velocity
        </Typography>
        <Typography className="w-[440px] mx-auto text-center my-4">
          Bespoke decision making and management solutions for equitable and efficient organizations and communities.
        </Typography>
      </div>
    </div>
  );
}

import { Button } from '@/components/ui/Button';
import { Typography } from '@/components/ui/Typography';
import { CardLink } from '@/components/ui/CardLink';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="flex flex-row w-full justify-center static">
      <div className="flex flex-col justify-center align-middle static">
        <Typography as="h2" className="text-center">
          OrbiDAO Wizard
        </Typography>
        <Typography className="mt-2 mb-4 text-center">How it Works</Typography>

        <CardLink type="dashed" size="sm">
          <Typography>1. Mint OrbiDAO Membership NFT</Typography>
        </CardLink>
        <CardLink type="dashed" size="sm">
          <Typography>2. Select your Membership Model and Custom Details</Typography>
        </CardLink>
        <CardLink type="dashed" size="sm">
          <Typography>3. Select your Governance Model and Custom Details</Typography>
        </CardLink>
        <CardLink type="dashed" size="sm">
          <Typography>4. Select your Treasury Membership Model and Custom Details</Typography>
        </CardLink>
        <CardLink type="dashed" size="sm">
          <Typography>5. Add any additional features available</Typography>
        </CardLink>
        <CardLink type="dashed" size="sm">
          <Typography>6. Deploy</Typography>
        </CardLink>
        <div className="mt-8 flex flex-row justify-center  gap-4 w-full">
          <Link href={'/app/dao/new'}>
            <Button>Create your DAO</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

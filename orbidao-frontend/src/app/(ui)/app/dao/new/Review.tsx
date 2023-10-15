import { Card, CardHeader, CardBody } from '@nextui-org/card';
import { Typography } from '@/components/ui/Typography';
import { StepProps } from './page';
import { MEMBERSHIP } from './Membership';

const CreateOrgReview = ({ formData }: Pick<StepProps, 'formData'>) => {
  const hideAddress = formData.membership === MEMBERSHIP.WHITELIST;
  const isFungible = formData.membership === MEMBERSHIP.FUNGIBLE;
  return (
    <div className="flex flex-wrap flex-col gap-2 my-4 items-center text-left">
      <Card className="w-full border border-white bg-gradient-to-b from-zinc-800 to-gray-700">
        <CardHeader className="w-full justify-center">
          <Typography className="my-2" as="h4">
            Review Options
          </Typography>
        </CardHeader>
        <CardBody>
          <Typography className="flex justify-between">
            <Typography className="pr-10" weight="semibold">
              Template:
            </Typography>
            <Typography weight="light">{`${formData?.orgTemplate}`}</Typography>
          </Typography>
          <Typography className="flex justify-between">
            <Typography className="pr-10" weight="semibold">
              Name:
            </Typography>
            <Typography weight="light">{`${formData?.organizationName}`}</Typography>
          </Typography>
          <Typography className="flex justify-between">
            <Typography className="pr-10" weight="semibold">
              Membership:
            </Typography>
            <Typography weight="light">{`${formData?.membership}`}</Typography>
          </Typography>
          {!hideAddress && (
            <Typography className="flex justify-between">
              <Typography className="pr-10" weight="semibold">
                {isFungible ? 'Mint Address' : 'Collection Address'}:
              </Typography>
              <Typography weight="light">{`${formData?.mintAddress || formData?.collectionAddress}`}</Typography>
            </Typography>
          )}
          <Typography className="flex justify-between">
            <Typography className="pr-10" weight="semibold">
              Proposal Fee:
            </Typography>
            <Typography weight="light">{`${formData?.proposalFee}`} SOL</Typography>
          </Typography>
          <Typography className="my-2 mt-2 w-full justify-center text-center" as="h5">
            Voting Options
          </Typography>

          <Typography className="flex justify-between">
            <Typography className="pr-10" weight="semibold">
              Minimum Votes:
            </Typography>
            <Typography weight="light">{`${formData?.votes}`} votes</Typography>
          </Typography>
          <Typography className="flex justify-between">
            <Typography className="pr-10" weight="semibold">
              Quorum Participation:
            </Typography>
            <Typography weight="light">{`${formData?.quorumParticipation}`} %</Typography>
          </Typography>
          {!hideAddress && !isFungible && (
            <Typography className="flex justify-between">
              <Typography className="pr-10" weight="semibold">
                Stake:
              </Typography>
              <Typography weight="light">{`${formData?.votingStake}`} tokens</Typography>
            </Typography>
          )}
          <Typography className="flex justify-between">
            <Typography className="pr-10" weight="semibold">
              Pre-voting Duration:
            </Typography>
            <Typography weight="light">{`${formData?.preVoting}`} Days</Typography>
          </Typography>
          <Typography className="flex justify-between">
            <Typography className="pr-10" weight="semibold">
              Post-voting Duration:
            </Typography>
            <Typography weight="light">{`${formData?.postVoting}`} Days</Typography>
          </Typography>
        </CardBody>
      </Card>
    </div>
  );
};

export { CreateOrgReview };

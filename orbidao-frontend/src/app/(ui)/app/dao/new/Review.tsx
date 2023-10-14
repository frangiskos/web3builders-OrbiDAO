import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Typography } from "@/components/ui/Typography";
import { StepProps } from "./page";
import { MEMBERSHIP } from "./Membership";

const CreateOrgReview = ({ formData }: Pick<StepProps, "formData">) => {
  const hideAddress = formData.membership === MEMBERSHIP.WHITELIST;
  const isFungible = formData.membership === MEMBERSHIP.FUNGIBLE;
  return (
    <div className="w-[440px] flex flex-wrap flex-col gap-2 my-4 items-center text-left">
      <Card className="w-full border border-white bg-gradient-to-b from-zinc-800 to-gray-700">
        <CardHeader className="w-full justify-center">
          <Typography className="my-2" as="h4">
          Review Options
          </Typography>
        </CardHeader>
        <CardBody>
          <Typography className="flex">
            <Typography className="pr-10" weight="semibold">Template:</Typography>
            <Typography weight="light">{`${formData?.orgTemplate}`}</Typography>
          </Typography>
          <Typography className="flex">
            <Typography className="pr-10" weight="semibold">Name:</Typography>
            <Typography weight="light">{`${formData?.organizationName}`}</Typography>
          </Typography>
          <Typography className="flex">
            <Typography className="pr-10" weight="semibold">Membership:</Typography>
            <Typography weight="light">{`${formData?.membership}`}</Typography>
          </Typography>
          {!hideAddress && (
            <Typography className="flex">
              <Typography className="pr-10" weight="semibold">{isFungible ? "Mint Address" : "Collection Address"}:</Typography>
              <Typography weight="light">{`${formData?.mintAddress || formData?.collectionAddress}`}</Typography>
            </Typography>
          )}
          <Typography className="flex">
            <Typography className="pr-10" weight="semibold">Proposal Fee:</Typography>
            <Typography weight="light">{`${formData?.proposalFee}`}</Typography>
          </Typography>
          <Typography className="flex">
            <Typography className="pr-10" weight="semibold">Votes:</Typography>
            <Typography weight="light">{`${formData?.votes}`}</Typography>
          </Typography>
          <Typography className="flex">
            <Typography className="pr-10" weight="semibold">Votes :: Quorum Participation:</Typography>
            <Typography weight="light">{`${formData?.quorumParticipation}`}</Typography>
          </Typography>
          {!hideAddress && !isFungible && (
            <Typography className="flex">
              <Typography className="pr-10" weight="semibold">Votes :: Stake:</Typography>
              <Typography weight="light">{`${formData?.votingStake}`}</Typography>
            </Typography>
          )}
          <Typography className="flex">
            <Typography className="pr-10" weight="semibold">Votes :: Pre-voting:</Typography>
            <Typography weight="light">{`${formData?.preVoting}`}</Typography>
          </Typography>
          <Typography className="flex">
            <Typography className="pr-10" weight="semibold">Votes :: Post-voting:</Typography>
            <Typography weight="light">{`${formData?.postVoting}`}</Typography>
          </Typography>
        </CardBody>
      </Card>
    </div>
  );
};

export { CreateOrgReview };

import { Typography } from "@/components/ui/Typography";
import { StepProps } from "./page";
import { MEMBERSHIP } from "./Membership";

const CreateOrgReview = ({ formData }: Pick<StepProps, "formData">) => {
  const hideAddress = formData.membership === MEMBERSHIP.WHITELIST;
  const isFungible = formData.membership === MEMBERSHIP.FUNGIBLE;
  return (
    <div className="w-[440px] flex flex-wrap flex-col gap-2 my-4 items-start text-left">
      <Typography as="h3">Review Options</Typography>
      <Typography>Template: {`${formData?.orgTemplate}`}</Typography>
      <Typography>Name: {`${formData?.organizationName}`}</Typography>
      <Typography>Membership{`${formData?.membership}`}</Typography>
      {!hideAddress && (
        <Typography>
          {isFungible ? "Mint Address" : "Collection Address"}:
          {`${formData?.mintAddress || formData?.collectionAddress}`}
        </Typography>
      )}
      <Typography>Proposal Fee: {`${formData?.proposalFee}`}</Typography>
      <Typography>Votes: {`${formData?.votes}`}</Typography>
      <Typography>
        Votes :: Quorum Participation: {`${formData?.quorumParticipation}`}%
      </Typography>
      {!hideAddress && !isFungible && (
        <Typography>Votes :: Stake: {`${formData?.votingStake}`}</Typography>
      )}
      <Typography>Votes :: Pre-voting: {`${formData?.preVoting}`}</Typography>
      <Typography>Votes :: Post-voting: {`${formData?.postVoting}`}</Typography>
    </div>
  );
};

export { CreateOrgReview };

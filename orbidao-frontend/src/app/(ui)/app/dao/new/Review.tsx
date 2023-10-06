import { Typography } from "@/components/ui/Typography";
import { StepProps } from "./page";
import { MEMBERSHIP } from "./Membership";

const CreateOrgReview = ({ formData }: Pick<StepProps, "formData">) => {
  const hideAddress = formData.membership === MEMBERSHIP.WHITELIST;
  const isFungible = formData.membership === MEMBERSHIP.FUNGIBLE;
  return (
    <div className="w-[440px] flex flex-wrap flex-col gap-2 my-4 items-start text-left">
      <Typography as="h3">Review Options</Typography>
      <Typography weight="light">
        Template:
        <Typography className="p-0">{`${formData?.orgTemplate}`}</Typography>
      </Typography>
      <Typography weight="light">
        Name:{" "}
        <Typography className="p-0">{`${formData?.organizationName}`}</Typography>
      </Typography>
      <Typography weight="light">
        Membership:{" "}
        <Typography className="p-0">{`${formData?.membership}`}</Typography>
      </Typography>
      {!hideAddress && (
        <Typography weight="light">
          {isFungible ? "Mint Address" : "Collection Address"}:
          <Typography className="p-0">{`${
            formData?.mintAddress || formData?.collectionAddress
          }`}</Typography>
        </Typography>
      )}
      <Typography weight="light">
        Proposal Fee:
        <Typography className="p-0">{`${formData?.proposalFee}`}</Typography>
      </Typography>
      <Typography weight="light">
        Votes:
        <Typography className="p-0">{`${formData?.votes}`}</Typography>
      </Typography>
      <Typography weight="light">
        Votes :: Quorum Participation:
        <Typography className="p-0">
          {`${formData?.quorumParticipation}`}%
        </Typography>
      </Typography>
      {!hideAddress && !isFungible && (
        <Typography weight="light">
          Votes :: Stake:{" "}
          <Typography className="p-0">{`${formData?.votingStake}`}</Typography>
        </Typography>
      )}
      <Typography weight="light">
        Votes :: Pre-voting:{" "}
        <Typography className="p-0">{`${formData?.preVoting}`}</Typography>
      </Typography>
      <Typography weight="light">
        Votes :: Post-voting:{" "}
        <Typography className="p-0">{`${formData?.postVoting}`}</Typography>
      </Typography>
    </div>
  );
};

export { CreateOrgReview };

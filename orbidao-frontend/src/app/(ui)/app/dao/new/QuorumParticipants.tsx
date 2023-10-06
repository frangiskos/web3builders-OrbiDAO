import { Typography } from "@/components/ui/Typography";
import { StepProps } from "./page";
import { RangeSlider } from "@/components/ui/RangeSlider";

const VoteQuorum = ({ onUpdate, formData }: StepProps) => {
  const formKey = "quorumParticipation";

  const onFieldUpdate = (values: number[]) => {
    onUpdate(formKey)(`${values[0]}`);
  };

  return (
    <>
      <div className="text-center">
        <Typography as="h3">Voting options :: Quorum Participation</Typography>
        <Typography className="my-4">
          Set the global minimum quorum for a proposal to pass
        </Typography>
      </div>
      <RangeSlider
        valueSuffix="%"
        values={[+formData[formKey]!]}
        onFinalChange={onFieldUpdate}
      />
    </>
  );
};

export { VoteQuorum };

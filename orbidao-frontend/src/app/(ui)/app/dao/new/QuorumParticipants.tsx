import { useEffect } from "react";
import { Typography } from "@/components/ui/Typography";
import { StepProps } from "./page";
import { RangeSlider } from "@/components/ui/RangeSlider";

const VoteQuorum = ({ onUpdate, formData, onHold }: StepProps) => {
  const formKey = "quorumParticipation";

  const onFieldUpdate = (values: number[]) => {
    onUpdate(formKey)(`${values[0]}`);
  };

  useEffect(() => {
    if (formData[formKey]) {
      onHold(false);
    } else {
      onHold(true);
    }
  }, [formData[formKey]]);

  return (
    <>
      <div className="text-center mb-6">
        <Typography as="h3">Voting options :: Quorum Participation</Typography>
        <Typography weight="light" className="my-4">
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

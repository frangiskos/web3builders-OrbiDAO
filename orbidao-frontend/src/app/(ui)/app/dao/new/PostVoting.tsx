import { Typography } from "@/components/ui/Typography";
import { StepProps } from "./page";
import { RangeSlider } from "@/components/ui/RangeSlider";
import { useEffect } from "react";

const PostVoting = ({ onUpdate, formData, onHold }: StepProps) => {
  const formKey = "postVoting";

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
        <Typography as="h3">Voting options :: Maximum expiry period</Typography>
        <Typography weight="light" className="my-4">
          Set the global minimum quorum for a proposal to pass
        </Typography>
      </div>
      <RangeSlider
        values={[+formData[formKey]!]}
        onFinalChange={onFieldUpdate}
      />
    </>
  );
};

export { PostVoting };

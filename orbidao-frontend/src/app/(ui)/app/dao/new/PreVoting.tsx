import { Typography } from "@/components/ui/Typography";
import { StepProps } from "./page";
import { RangeSlider } from "@/components/ui/RangeSlider";
import { useEffect } from "react";

const PreVoting = ({ onUpdate, formData, onHold }: StepProps) => {
  const formKey = "preVoting";

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
        <Typography as="h3">Voting options :: Pre voting period</Typography>
        <Typography weight="light" className="my-4">
          Set the minimum delay before a proposal can be voted upon
        </Typography>
      </div>
      <RangeSlider
        min={0}
        max={14}
        values={[+formData[formKey]!]}
        onFinalChange={onFieldUpdate}
      />
    </>
  );
};

export { PreVoting };

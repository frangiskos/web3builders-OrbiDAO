import { Typography } from "@/components/ui/Typography";
import { StepProps } from "./page";
import { RangeSlider } from "@/components/ui/RangeSlider";

const PreVoting = ({ onUpdate, formData }: StepProps) => {
  const formKey = "preVoting";

  const onFieldUpdate = (values: number[]) => {
    onUpdate(formKey)(`${values[0]}`);
  };

  return (
    <>
      <div className="text-center">
        <Typography as="h3">Voting options :: Pre voting period</Typography>
        <Typography className="my-4">
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

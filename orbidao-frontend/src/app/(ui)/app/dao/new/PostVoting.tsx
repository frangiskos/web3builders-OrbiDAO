import { Typography } from "@/components/ui/Typography";
import { StepProps } from "./page";
import { RangeSlider } from "@/components/ui/RangeSlider";

const PostVoting = ({ onUpdate, formData }: StepProps) => {
  const formKey = "postVoting";

  const onFieldUpdate = (values: number[]) => {
    onUpdate(formKey)(`${values[0]}`);
  };

  return (
    <>
      <div className="text-center">
        <Typography as="h3">Voting options :: Maximum expiry period</Typography>
        <Typography className="my-4">
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

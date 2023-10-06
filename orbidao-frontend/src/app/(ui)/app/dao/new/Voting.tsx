import { ChangeEvent } from "react";
import { Typography } from "@/components/ui/Typography";
import { StepProps } from "./page";
import { Input } from "@nextui-org/input";

const Voting = ({ onUpdate, formData }: StepProps) => {
  const formKey = "votes";
  const onFieldUpdate = (evt: ChangeEvent<HTMLInputElement>) => {
    onUpdate(formKey)(evt.target.value);
  };

  return (
    <>
      <div className="text-center">
        <Typography as="h3">Voting options :: Votes</Typography>
        <Typography className="my-4">
          Set the minimum numbers of votes to be valid
        </Typography>
      </div>

      <Input
        type="number"
        value={formData[formKey]}
        name={formKey}
        onChange={onFieldUpdate}
        min={1}
        endContent={
          <div className="pointer-events-none flex items-center">
            <span className="text-default-400 text-small">Votes</span>
          </div>
        }
      />
    </>
  );
};

export { Voting };

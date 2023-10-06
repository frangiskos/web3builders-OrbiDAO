import { ChangeEvent, useEffect, useState } from "react";
import { Typography } from "@/components/ui/Typography";
import { StepProps } from "./page";
import { Input } from "@nextui-org/input";

const Voting = ({ onUpdate, formData, onHold }: StepProps) => {
  const [isInvalid, setInvalid] = useState(false);
  const formKey = "votes";
  const onFieldUpdate = (evt: ChangeEvent<HTMLInputElement>) => {
    onUpdate(formKey)(evt.target.value);
    if (+evt.target.value > 0) {
      setInvalid(false);
      onHold(false);
    } else {
      setInvalid(true);
      onHold(true);
    }
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
        <Typography as="h3">Voting options :: Votes</Typography>
        <Typography weight="light" className="my-4">
          Set the minimum numbers of votes to be valid
        </Typography>
      </div>

      <Input
        type="number"
        value={formData[formKey]}
        name={formKey}
        onChange={onFieldUpdate}
        min={1}
        className="mb-4"
        isInvalid={isInvalid}
        errorMessage={isInvalid && "Enter the vote above 0"}
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

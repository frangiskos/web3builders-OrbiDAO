import { ChangeEvent, useEffect, useState } from "react";
import { Typography } from "@/components/ui/Typography";
import { StepProps } from "./page";
import { Input } from "@nextui-org/input";

const ProposalFee = ({ onUpdate, formData, onHold }: StepProps) => {
  const [isInvalid, setInvalid] = useState(false);
  const formKey = "proposalFee";
  const onFieldUpdate = (evt: ChangeEvent<HTMLInputElement>) => {
    onUpdate(formKey)(evt.target.value);
    if (+evt.target.value > 0 && +evt.target.value < 100) {
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
        <Typography as="h3">Proposal Fee</Typography>
        <Typography weight="light" className="my-4">
          Enter the amount that members will pay to create a new proposal
        </Typography>
      </div>
      <Input
        type="number"
        value={formData[formKey]}
        name={formKey}
        onChange={onFieldUpdate}
        className="mb-4"
        max={99}
        min={1}
        isInvalid={isInvalid}
        errorMessage={isInvalid && "Enter the fee amount within 1 to 99"}
        endContent={
          <div className="pointer-events-none flex items-center">
            <span className="text-default-400 text-small">SOL</span>
          </div>
        }
      />
    </>
  );
};

export { ProposalFee };

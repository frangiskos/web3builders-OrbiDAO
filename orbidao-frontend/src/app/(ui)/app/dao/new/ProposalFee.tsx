import { ChangeEvent } from "react";
import { Typography } from "@/components/ui/Typography";
import { StepProps } from "./page";
import { Input } from "@nextui-org/input";

const ProposalFee = ({ onUpdate, formData }: StepProps) => {
  const formKey = "proposalFee";
  const onFieldUpdate = (evt: ChangeEvent<HTMLInputElement>) => {
    onUpdate(formKey)(evt.target.value);
  };

  return (
    <>
      <div className="text-center">
        <Typography as="h3">Proposal Fee</Typography>
        <Typography className="w-[440px] text-center my-4">
          Enter the amount that members will pay to create a new proposal
        </Typography>
      </div>
      <Input
        type="number"
        value={formData[formKey]}
        name={formKey}
        onChange={onFieldUpdate}
        max={99}
        min={1}
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

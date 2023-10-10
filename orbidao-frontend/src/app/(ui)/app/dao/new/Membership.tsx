import { useEffect } from "react";
import { RadioGroup } from "@/components/ui/RadioGroup";
import { Typography } from "@/components/ui/Typography";
import { StepProps } from "./page";

export enum MEMBERSHIP {
  FUNGIBLE = "fungible",
  NON_FUNGIBLE = "non-fungible",
  WHITELIST = "whitelist",
}

const Membership = ({
  onUpdate,
  onStepChange,
  formData,
  onHold,
}: StepProps) => {
  const formKey = "membership";
  const onRadioChange = (value: string) => {
    onUpdate(formKey)(value);
    onStepChange?.((prev) => prev + 1);
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
        <Typography as="h3">Choose membership method</Typography>
        <Typography weight="light" className="text-center my-4">
          This will define how members can join your organization
        </Typography>
      </div>
      <RadioGroup
        type="card"
        name={formKey}
        orientation="horizontal"
        onValueChange={onRadioChange}
        value={formData[formKey]}
      >
        <RadioGroup.Radio type="card" value={MEMBERSHIP.FUNGIBLE}>
          Fungible
        </RadioGroup.Radio>
        <RadioGroup.Radio type="card" value={MEMBERSHIP.NON_FUNGIBLE}>
          Non-Fungible
        </RadioGroup.Radio>
        <RadioGroup.Radio type="card" value={MEMBERSHIP.WHITELIST}>
          Whitelist
        </RadioGroup.Radio>
      </RadioGroup>
    </>
  );
};

export { Membership };

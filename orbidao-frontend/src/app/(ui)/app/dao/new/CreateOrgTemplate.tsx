import { useEffect } from "react";
import { RadioGroup } from "@/components/ui/RadioGroup";
import { Typography } from "@/components/ui/Typography";
import { StepProps } from "./page";

const CreateOrgTemplate = ({
  onUpdate,
  onStepChange,
  formData,
  onHold,
}: StepProps) => {
  const formKey = "orgTemplate";
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
        <Typography as="h3">Create a new organization</Typography>
        <Typography weight="light" className="my-4">
          Select a template below
        </Typography>
      </div>
      <RadioGroup
        type="card"
        name={formKey}
        orientation="horizontal"
        onValueChange={onRadioChange}
        value={formData[formKey]}
      >
        <RadioGroup.Radio type="card" value="Blank">
          Blank
        </RadioGroup.Radio>
        <RadioGroup.Radio type="card" value="Delaware C-Corp">
          Delaware C-Corp
        </RadioGroup.Radio>
        <RadioGroup.Radio type="card" value="NFT Community">
          NFT Community
        </RadioGroup.Radio>
      </RadioGroup>
    </>
  );
};

export { CreateOrgTemplate };

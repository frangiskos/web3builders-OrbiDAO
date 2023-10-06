import { ChangeEvent } from "react";
import { Typography } from "@/components/ui/Typography";
import { StepProps } from "./page";
import { Input } from "@nextui-org/input";

const NameOrganization = ({ onUpdate, formData }: StepProps) => {
  const formKey = "organizationName";
  const onFieldUpdate = (evt: ChangeEvent<HTMLInputElement>) => {
    onUpdate(formKey)(evt.target.value);
  };
  return (
    <>
      <div className="text-center">
        <Typography as="h3">Name your organization</Typography>
        <Typography className="w-[440px] text-center my-4">
          Give a name that the members will see
        </Typography>
      </div>
      <Input
        type="name"
        value={formData[formKey]}
        name={formKey}
        onChange={onFieldUpdate}
      />
    </>
  );
};

export { NameOrganization };

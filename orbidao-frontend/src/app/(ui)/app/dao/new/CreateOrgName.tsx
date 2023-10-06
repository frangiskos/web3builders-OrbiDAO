import { ChangeEvent, useEffect } from "react";
import { Typography } from "@/components/ui/Typography";
import { StepProps } from "./page";
import { Input } from "@nextui-org/input";

const NameOrganization = ({ onUpdate, formData, onHold }: StepProps) => {
  const formKey = "organizationName";
  const onFieldUpdate = (evt: ChangeEvent<HTMLInputElement>) => {
    onUpdate(formKey)(evt.target.value);
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
        <Typography as="h3">Name your organization</Typography>
        <Typography weight="light" className="text-center my-4">
          Give a name that the members will see
        </Typography>
      </div>
      <Input
        type="name"
        value={formData[formKey]}
        name={formKey}
        onChange={onFieldUpdate}
        className="mb-4"
      />
    </>
  );
};

export { NameOrganization };

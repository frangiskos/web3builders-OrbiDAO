import { ChangeEvent, useMemo } from "react";
import { Typography } from "@/components/ui/Typography";
import { StepProps } from "./page";
import { Input } from "@nextui-org/input";
import { Checkbox } from "@nextui-org/checkbox";
import { MEMBERSHIP } from "./Membership";

const TokenIssuance = ({ onUpdate, formData }: StepProps) => {
  const isFungible = formData.membership === MEMBERSHIP.NON_FUNGIBLE;

  const generateToken = () => Math.random().toString(36).substring(2);

  const formKey = useMemo(
    () => (isFungible ? "mintAddress" : "collectionAddress"),
    [formData.membership]
  );
  const onFieldUpdate = (evt: ChangeEvent<HTMLInputElement>) => {
    onUpdate(formKey)(evt.target.value);
  };

  const onGenerateToken = (is: boolean) => {
    is && onUpdate(formKey)(generateToken());
  };

  const tokenParagraph = isFungible
    ? "Enter your mint address"
    : "Enter your collection address";

  return (
    <>
      <div className="text-center">
        <Typography as="h3">Token Issuance</Typography>
        <Typography className="my-4">{tokenParagraph}</Typography>
      </div>
      <Input
        type="name"
        value={formData[formKey]}
        name={formKey}
        onChange={onFieldUpdate}
      />
      <Checkbox onValueChange={onGenerateToken}>
        I don&apos;t have a token, issue one for
      </Checkbox>
    </>
  );
};

export { TokenIssuance };

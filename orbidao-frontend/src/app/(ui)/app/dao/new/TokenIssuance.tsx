import { ChangeEvent, useEffect, useMemo } from "react";
import { Typography } from "@/components/ui/Typography";
import { StepProps } from "./page";
import { Input } from "@nextui-org/input";
import { Checkbox } from "@nextui-org/checkbox";
import { MEMBERSHIP } from "./Membership";

const TokenIssuance = ({ onUpdate, formData, onHold }: StepProps) => {
  const isFungible = formData.membership === MEMBERSHIP.FUNGIBLE;

  const generateToken = () => Math.random().toString(36).substring(2);

  const formKey = useMemo(
    () => (isFungible ? "mintAddress" : "collectionAddress"),
    [formData.membership]
  );

  useEffect(() => {
    if (formData[formKey]) {
      onHold(false);
    } else {
      onHold(true);
    }
  }, [formData[formKey]]);

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
      <div className="text-center mb-6">
        <Typography as="h3">Token Issuance</Typography>
        <Typography weight="light" className="my-4">
          {tokenParagraph}
        </Typography>
      </div>
      <Input
        type="name"
        value={formData[formKey]}
        name={formKey}
        onChange={onFieldUpdate}
        className="mb-4"
      />
      <Checkbox className="mb-4" onValueChange={onGenerateToken}>
        I don&apos;t have a token, issue one for
      </Checkbox>
    </>
  );
};

export { TokenIssuance };

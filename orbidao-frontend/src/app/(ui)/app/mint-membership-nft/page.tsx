"use client";
import { useEffect, useState } from "react";
import { RedirectType } from "next/dist/client/components/redirect";
import { redirect } from "next/navigation";
import { Typography } from "@/components/ui/Typography";
import { RadioGroup } from "@/components/ui/RadioGroup";

export default function Page() {
  const [route, setRoute] = useState("");

  useEffect(() => {
    if (route) {
      redirect(route, RedirectType.push);
    }
  }, [route]);

  const onRadioChange = (value: string) => {
    setRoute(value);
  };

  return (
    <div className="flex flex-row w-full justify-center static">
      <div className="flex flex-col justify-center align-middle static">
        <Typography as="h2" className="text-center">
          Welcome New DAOists
        </Typography>
        <Typography className="mt-2 mb-4 text-center">
          Mint Membership NFT
        </Typography>

        <RadioGroup
          className="mb-16"
          type="card"
          orientation="horizontal"
          onValueChange={onRadioChange}
        >
          <RadioGroup.Radio type="card" value="/app/gov-member">
            Membership Gov
          </RadioGroup.Radio>
          <RadioGroup.Radio type="card" value="/app/dao-wizard">
            Build with the Wizard
          </RadioGroup.Radio>
          <RadioGroup.Radio type="card" value="/app/learn-more">
            Learn More
          </RadioGroup.Radio>
        </RadioGroup>
      </div>
    </div>
  );
}

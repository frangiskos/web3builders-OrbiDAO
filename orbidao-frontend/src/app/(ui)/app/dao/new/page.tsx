"use client";
import { Input } from "@nextui-org/input";
import { RadioGroup } from "@/components/ui/RadioGroup";
import { Typography } from "@/components/ui/Typography";
import { Stepper } from "@/components/ui/Stepper";
import { Background } from "./Background";
import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useMemo,
  useState,
} from "react";

type FormDataType = {
  firstStep: string | undefined;
  name: string | undefined;
  email: string | undefined;
};

interface StepProps {
  formData?: FormDataType;
  onUpdate?: Dispatch<SetStateAction<FormDataType>>;
}

const FirstStep = ({ onUpdate }: StepProps) => {
  const onRadioChange = (value: string) => {
    onUpdate?.((prev) => ({ ...prev, firstStep: value }));
  };
  return (
    <RadioGroup
      type="card"
      name="firstStep"
      orientation="horizontal"
      onValueChange={onRadioChange}
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
  );
};
const SecondStep = ({ onUpdate }: StepProps) => {
  const onFieldChange =
    (fieldName: string) => (evt: ChangeEvent<HTMLInputElement>) => {
      onUpdate?.((prev) => ({ ...prev, [fieldName]: evt.target.value }));
    };
  return (
    <div className="w-[440px] flex flex-wrap flex-col gap-2 my-4">
      <Input type="name" label="Name" onChange={onFieldChange("name")} />
      <Input type="email" label="Email" onChange={onFieldChange("email")} />
    </div>
  );
};
const ThirdStep = ({ formData }: StepProps) => (
  <div className="w-[440px] flex flex-wrap flex-col gap-2 my-4 items-start text-left">
    <Typography as="h3">Review Options</Typography>
    <Typography>{formData?.firstStep}</Typography>
    <Typography>{formData?.name}</Typography>
    <Typography>{formData?.email}</Typography>
  </div>
);

export default function Page() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormDataType>({
    firstStep: undefined,
    name: undefined,
    email: undefined,
  });

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
  };

  const steps = useMemo(
    () => [
      <FirstStep key="first" onUpdate={setFormData} />,
      <SecondStep key="second" onUpdate={setFormData} />,
      <ThirdStep key="third" formData={formData} />,
    ],
    [formData]
  );

  return (
    <>
      <Background />
      <div className="absolute inset-0 flex flex-col items-center justify-center mx-auto max-w-5xl px-4">
        <Typography as="h3">Create a new organization</Typography>
        <Typography className="w-[440px] text-center my-4">
          Select a template below
        </Typography>

        <form onSubmit={handleFormSubmit}>
          <Stepper
            steps={steps}
            lastStep="Create"
            current={currentStep}
            handleStep={setCurrentStep}
            type={currentStep === steps.length - 1 ? "submit" : "button"}
          />
        </form>
        <div className="flex items-center justify-center mt-10 text-sm text-white text-opacity-50">
          <span className="text-slate-400 mx-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
              />
            </svg>
          </span>
          An on-chain replica of a traditional Delaware C-Corp
        </div>
      </div>
    </>
  );
}

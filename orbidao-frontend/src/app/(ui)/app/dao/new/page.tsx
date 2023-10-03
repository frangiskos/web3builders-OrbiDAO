import { Input } from "@nextui-org/input";
import { RadioGroup } from "@/components/ui/RadioGroup";
import { Typography } from "@/components/ui/Typography";
import { Stepper } from "@/components/ui/Stepper";
import { Background } from "./Background";

const FirstStep = () => (
  <RadioGroup type="card" defaultValue="name2" orientation="horizontal">
    <RadioGroup.Radio type="card" value="name1">
      Blank
    </RadioGroup.Radio>
    <RadioGroup.Radio type="card" value="name2">
      Delaware C-Corp
    </RadioGroup.Radio>
    <RadioGroup.Radio type="card" value="name3">
      NFT Community
    </RadioGroup.Radio>
  </RadioGroup>
);
const SecondStep = () => (
  <div className="w-[440px] flex flex-wrap flex-col gap-2 my-4">
    <Input type="email" label="Email" />
    <Input type="password" label="Password" />
  </div>
);
const ThirdStep = () => (
  <div className="w-[440px] flex flex-wrap flex-col gap-2 my-4 items-start text-left">
    <Typography as="h3">Review Options</Typography>
    <Typography>Blank</Typography>
    <Typography>Input</Typography>
    <Typography>Input</Typography>
  </div>
);

const steps = [
  <FirstStep key="first" />,
  <SecondStep key="second" />,
  <ThirdStep key="third" />,
];

export default function Page() {
  return (
    <>
      <Background />
      <div className="absolute inset-0 flex flex-col items-center justify-center mx-auto max-w-5xl px-4">
        <Typography as="h3">Create a new organization</Typography>
        <Typography className="w-[440px] text-center my-4">
          Select a template below
        </Typography>

        <Stepper steps={steps} lastStep="Create" />
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

"use client";
import { Typography } from "@/components/ui/Typography";
import { Stepper } from "@/components/ui/Stepper";
import { Background } from "./Background";
import { Dispatch, FormEvent, SetStateAction, useMemo, useState } from "react";
import { CreateOrgTemplate } from "./CreateOrgTemplate";
import { NameOrganization } from "./CreateOrgName";
import { MEMBERSHIP, Membership } from "./Membership";
import { TokenIssuance } from "./TokenIssuance";
import { ProposalFee } from "./ProposalFee";
import { Voting } from "./Voting";
import { VoteQuorum } from "./QuorumParticipants";
import { VotingStake } from "./VotingStake";
import { PreVoting } from "./PreVoting";
import { PostVoting } from "./PostVoting";
import { CreateOrgReview } from "./Review";

export type FormDataType = {
  orgTemplate?: string;
  organizationName?: string;
  membership?: string;
  mintAddress?: string;
  collectionAddress?: string;
  proposalFee?: string;
  votes?: string;
  quorumParticipation?: string;
  votingStake?: string;
  preVoting?: string;
  postVoting?: string;
};

export interface StepProps {
  formData: FormDataType;
  onUpdate: (fieldName: keyof FormDataType) => (value: string) => void;
  onStepChange?: Dispatch<SetStateAction<number>>;
}

export default function Page() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormDataType>({
    quorumParticipation: "51",
    preVoting: "1",
    postVoting: "14",
  });

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    console.log("submit: ", formData);
  };

  const onFormUpdate = (fieldName: keyof FormDataType) => (value: string) => {
    setFormData((prev) => ({ ...prev, [fieldName]: value }));
  };

  const steps = useMemo(() => {
    const { membership } = formData;
    const createOrganization = [
      <CreateOrgTemplate
        key="createOrg"
        formData={formData}
        onUpdate={onFormUpdate}
        onStepChange={setCurrentStep}
      />,
      <NameOrganization
        key="nameOrg"
        formData={formData}
        onUpdate={onFormUpdate}
      />,
      <Membership
        key="memberShip"
        formData={formData}
        onUpdate={onFormUpdate}
        onStepChange={setCurrentStep}
      />,
      <ProposalFee
        key="proposalFee"
        formData={formData}
        onUpdate={onFormUpdate}
      />,
      <Voting key="voting" formData={formData} onUpdate={onFormUpdate} />,
      <VoteQuorum
        key="voteQuorum"
        formData={formData}
        onUpdate={onFormUpdate}
      />,
      <PreVoting key="preVoting" formData={formData} onUpdate={onFormUpdate} />,
      <PostVoting
        key="postVoting"
        formData={formData}
        onUpdate={onFormUpdate}
      />,
      <CreateOrgReview key="review" formData={formData} />,
    ];

    if (membership && membership !== MEMBERSHIP.WHITELIST) {
      createOrganization.splice(
        3,
        0,
        <TokenIssuance
          key="tokenIssuance"
          formData={formData}
          onUpdate={onFormUpdate}
        />
      );
    }
    if (membership && membership === MEMBERSHIP.NON_FUNGIBLE) {
      createOrganization.splice(
        7,
        0,
        <VotingStake
          key="votingStake"
          formData={formData}
          onUpdate={onFormUpdate}
        />
      );
    }

    return createOrganization;
  }, [formData]);

  return (
    <>
      <Background />
      <div className="absolute inset-0 flex flex-col items-center justify-center mx-auto max-w-5xl px-4">
        <form onSubmit={handleFormSubmit}>
          <Stepper
            steps={steps}
            lastStep="Create"
            current={currentStep}
            handleStep={setCurrentStep}
            type={currentStep < steps.length - 1 ? "button" : "submit"}
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

"use client";
import React, { FC, ReactNode, useState } from "react";
import { Button } from "@/components/ui/Button";

interface StepperProps {
  steps: JSX.Element[];
  current: number;
  lastStep?: ReactNode;
  children?: React.ReactNode;
  isDisabled?: boolean;
  className?: string;
  type?: "button" | "reset" | "submit";
  lastStepAction?: JSX.Element;
  handleStep: (val: number) => void;
  onFinish?: () => void;
  onNextChange?: () => void;
  onPreviousChange?: () => void;
}

const ChevronRight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    className="text-white"
    viewBox="0 0 16 16"
  >
    <path
      fill-rule="evenodd"
      d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"
      fill="white"
    ></path>
    <path
      fill-rule="evenodd"
      d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"
      fill="white"
    ></path>
  </svg>
);
const ChevronLeft = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    className="text-white"
    viewBox="0 0 16 16"
  >
    <path
      fill-rule="evenodd"
      d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
      fill="white"
    ></path>
    <path
      fill-rule="evenodd"
      d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
      fill="white"
    ></path>
  </svg>
);

const Stepper: FC<StepperProps> = ({
  children,
  lastStep = "Proceed",
  steps,
  current,
  handleStep,
  type,
  className = "",
  isDisabled = false,
  lastStepAction,
  onFinish,
  onNextChange,
  onPreviousChange,
}) => {
  const isLastStep = current === steps.length - 1;

  const handleNext = () => {
    handleStep(Math.min(current + 1, steps.length - 1));
    if (isLastStep) {
      onFinish?.();
    } else {
      onNextChange?.();
    }
  };

  const handlePrevious = () => {
    handleStep(Math.max(current - 1, 0));
    onPreviousChange?.();
  };

  return (
    <div className={`flex flex-col ${className}`}>
      {steps[current]}
      <div className="flex justify-end gap-2">
        <Button
          onClick={handlePrevious}
          isIconOnly
          isDisabled={current === 0}
        >
          <ChevronLeft />
        </Button>
        {lastStepAction && isLastStep ? (
          lastStepAction
        ) : (
          <Button
            onClick={handleNext}
            isIconOnly={!isLastStep}
            isDisabled={isDisabled}
            className="h-14"
            type={type}
            isLoading={type === 'submit'}
          >
            {isLastStep ? lastStep : <ChevronRight />}
          </Button>
        )}
      </div>
      {children}
    </div>
  );
};

Stepper.displayName = "Stepper";

export { Stepper };

import React, { FC, useMemo } from "react";
import {
  RadioGroup as BaseRadioGroup,
  Radio as BaseRadio,
  RadioGroupProps as BaseRadioGroupProps,
  RadioProps as BaseRadioProps,
} from "@nextui-org/radio";
import { cva } from "class-variance-authority";

interface RadioGroupProps extends BaseRadioGroupProps {
  type?: "card";
}

interface RadioProps extends BaseRadioProps {
  type?: "card";
}

const RadioGroup: FC<RadioGroupProps> & { Radio: FC<RadioProps> } = ({
  type = "card",
  ...props
}) => {
  const RadioGroupVariants = useMemo(
    () =>
      cva("", {
        variants: {
          intent: {
            card: "py-4 px-4",
          },
        },
        defaultVariants: {
          intent: "card",
        },
      }),
    []
  );

  const childWithProps = React.Children.map(props.children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child as React.ReactElement<any>, { type });
    }
    return child;
  });

  return (
    <BaseRadioGroup
      {...props}
      classNames={{
        base: RadioGroupVariants({ intent: type }),
      }}
    >
      {childWithProps}
    </BaseRadioGroup>
  );
};

const Radio: FC<RadioProps> = ({ type = "card", ...props }) => {
  const RadioVariants = useMemo(
    () =>
      cva("", {
        variants: {
          intent: {
            card: [
              "basis-0 grow shrink cursor-pointer border rounded-[10px] gap-4 p-4 inline-flex m-0 w-40 h-40 max-w-full items-center text-center justify-center radio-button",
              "bg-zing-200 border-white border-opacity-20 border-dashed",
              "data-[selected=true]:bg-gradient-to-b data-[selected=true]:from-zinc-800 data-[selected=true]:to-gray-700 data-[selected=true]:border-solid data-[selected=true]:border-indigo-300",
            ],
          },
        },
      }),
    []
  );

  return (
    <BaseRadio
      {...props}
      classNames={{
        base: RadioVariants({ intent: type }),
      }}
    />
  );
};

Radio.displayName = "RadioGroup.Radio";
RadioGroup.Radio = Radio;
RadioGroup.displayName = "RadioGroup";

export { RadioGroup, Radio };

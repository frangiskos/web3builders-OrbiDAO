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

const RadioGroup: FC<RadioGroupProps> & { Radio: FC<RadioProps> } = ({ type = "card", children, ...props }) => {
  const RadioGroupVariants = useMemo(
    () =>
      cva(
        "h-fit",
        {
          variants: {
            intent: {
              card: "py-4 px-4",
            },
          },
          defaultVariants: {
            intent: "card",
          },
        }
      ),
    []
  );

  const childWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { type });
    }
    return child;
  });

  return (
    <BaseRadioGroup
      {...props}
      children={childWithProps}
      classNames={{
        base: RadioGroupVariants({ intent: type }),
      }}
    />
  );
};

const Radio: FC<RadioProps> = ({ type = "card", ...props }) => {
  const RadioVariants = useMemo(
    () =>
      cva("", {
        variants: {
          intent: {
            card: [
              "inline-flex m-0 bg-content1 hover:bg-content2 items-center justify-between radio-button",
              "max-w-[300px] cursor-pointer rounded-lg gap-4 p-4 border-2 border-dashed",
              "data-[selected=true]:border-primary data-[selected=true]:border-solid",
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

export { RadioGroup };

import React, { useMemo } from "react";
import {
  Card as BaseCard,
  CardBody,
  CardProps as BaseCardProps,
} from "@nextui-org/card";
import { cva } from "class-variance-authority";

interface CardProps extends BaseCardProps {
  type?: "solid" | "dashed";
  icon?: JSX.Element;
}

const CardLink: React.FC<CardProps> = ({
  type = "solid",
  children,
  icon,
  isHoverable = true,
  className = "",
  ...props
}) => {
  const CardLinkVariants = useMemo(
    () =>
      cva(
        /* CardLink base style */
        "h-fit mb-2 border",
        {
          variants: {
            /* CardLink colors */
            intent: {
              solid: "border-solid hover:border-solid",
              dashed: "border-dashed hover:border-solid",
            },
          },

          // defaults
          defaultVariants: {
            intent: "solid",
          },
        }
      ),
    []
  );

  const combinedClasses = `${CardLinkVariants({ intent: type })} ${className}`;

  return (
    <BaseCard
      fullWidth
      classNames={{
        base: combinedClasses,
      }}
      {...props}
      isHoverable={isHoverable}
    >
      <CardBody className="flex flex-nowrap flex-row justify-between">
        <div>{children}</div>
        <div>{icon}</div>
      </CardBody>
    </BaseCard>
  );
};

CardLink.displayName = "CardLink";

export { CardLink };

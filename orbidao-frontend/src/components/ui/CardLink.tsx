import React, { useMemo } from "react";
import {
  Card as BaseCard,
  CardBody,
  CardProps as BaseCardProps,
} from "@nextui-org/card";
import { cva } from "class-variance-authority";

interface CardProps extends BaseCardProps {
  type?: "solid" | "dashed";
  size?: "sm" | "md" | "lg";
  icon?: JSX.Element;
}

const CardLink: React.FC<CardProps> = ({
  type = "solid",
  size = "sm",
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
            size: {
              sm: ["text-sm", "py-1", "px-2", "mb-2"],
              md: ["text-base", "py-1", "px-2", "mb-2"],
              lg: ["text-lg", "py-4", "px-8", "mb-3"],
            },
          },

          // defaults
          defaultVariants: {
            intent: "solid",
            size: "md",
          },
        }
      ),
    []
  );

  const combinedClasses = `${CardLinkVariants({
    intent: type,
    size,
  })} ${className}`;

  return (
    <BaseCard
      fullWidth
      classNames={{
        base: combinedClasses,
      }}
      {...props}
      isHoverable={isHoverable}
    >
      <CardBody className="flex flex-nowrap flex-row justify-between p-3">
        <div>{children}</div>
        <div>{icon}</div>
      </CardBody>
    </BaseCard>
  );
};

CardLink.displayName = "CardLink";

export { CardLink };

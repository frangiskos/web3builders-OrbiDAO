import React, { forwardRef, ElementType } from "react";
import { cva } from "class-variance-authority";
import {
  Button as BaseButton,
  ButtonProps as BaseButtonProps,
} from "@nextui-org/button";

interface ButtonProps extends Omit<BaseButtonProps, "variant"> {
  variant?: BaseButtonProps["variant"] | "outline";
  roundness?: "square" | "round" | "full";
  isFullWidth?: boolean;
  isExternal?: boolean;
  isLoading?: boolean;
}

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
}

const baseClasses = [
  "cursor-pointer",
  "whitespace-nowrap",
  "shadow-sm",
  "hover:bg-opacity-90",
  "capitalize",
  "font-semibold",
  "items-center",
  "justify-center",
  "transition-colors",
  "ease-in-out",
  "duration-500",
];

const ButtonVariants = cva(
  "text-white uppercase transition-colors duration-150",
  {
    variants: {
      intent: {
        solid:
          "border border-indigo-300 bg-gradient-to-b from-zinc-800 to-gray-700 hover:bg-green-600",
        bordered: "border border-indigo-300 bg-transparent hover:bg-red-600",
        light: "bg-gray-500 hover:bg-gray-600",
        flat: "bg-[#9eafbf] hover:text-white",
        faded: "bg-[#9eafbf] hover:text-white",
        shadow: "bg-[#9eafbf] hover:text-white",
        ghost: "bg-[#9eafbf] hover:text-white",
        outline: "bg-[#9eafbf] hover:text-white",
      },
      size: {
        sm: ["text-sm", "py-1", "px-2"],
        md: ["text-base", "py-2", "px-4"],
        lg: ["text-lg", "py-4", "px-8"],
      },
      roundness: {
        square: "rounded-none",
        round: "rounded-md",
        full: "rounded-full",
      },
    },
    defaultVariants: {
      intent: "solid",
      size: "md",
      roundness: "full",
    },
  }
);

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size }) => {
  let loaderSizeClasses;

  switch (size) {
    case "sm":
      loaderSizeClasses = "h-3 w-3";
      break;
    case "md":
      loaderSizeClasses = "h-5 w-5";
      break;
    case "lg":
      loaderSizeClasses = "h-7 w-7";
      break;
    default:
      loaderSizeClasses = "h-5 w-5";
  }

  return (
    <div
      role="status"
      className="inline-flex cursor-not-allowed rounded-md pr-3"
    >
      <svg
        className={`animate-spin rounded-full ${loaderSizeClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    </div>
  );
};

const Button = forwardRef<typeof BaseButton, ButtonProps>(
  (
    {
      children,
      isFullWidth,
      isExternal,
      isLoading,
      variant,
      size,
      isDisabled,
      as,
      roundness,
      isIconOnly,
      className = "",
      ...props
    },
    ref
  ) => {
    let classNameList = [...baseClasses];

    if (isFullWidth) classNameList.push("w-full");
    if (isDisabled || isLoading)
      classNameList.push("disabled", "opacity-50", "cursor-not-allowed");
    if (isIconOnly)
      classNameList.push(
        "rounded-full",
        "border-white",
        "w-14",
        "h-14",
        "min-w-unit-14"
      );

    const styledClasses = [
      ButtonVariants({ intent: variant, size, roundness }),
      ...classNameList,
      className,
    ].join(" ");

    const RenderedElement: ElementType = as ? as : BaseButton;
    const elementProps = {
      ...(as
        ? {
            target: isExternal ? "_blank" : undefined,
            rel: isExternal ? "noopener noreferrer" : undefined,
          }
        : {}),
      className: styledClasses,
      ref,
      ...props,
    };

    return (
      <RenderedElement {...elementProps} disabled={isDisabled}>
        {isLoading && <LoadingSpinner size={size} />}
        {children}
      </RenderedElement>
    );
  }
);

Button.displayName = "Button";
export { Button };

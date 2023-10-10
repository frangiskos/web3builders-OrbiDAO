import React, { forwardRef, useMemo } from "react";
import { cva } from "class-variance-authority";

interface TypographyProps {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  type?: "primary" | "secondary" | "warning" | "danger" | "disabled";
  italic?: boolean;
  weight?: "light" | "normal" | "medium" | "semibold" | "bold";
  isDisabled?: boolean;
  className?: string;
  onClick?: () => void;
}

const Typography = forwardRef<HTMLHeadingElement & HTMLParagraphElement & HTMLSpanElement, TypographyProps>(
  ({ children, className = "", as = "p", italic, weight = "normal", type, onClick, ...props }, ref) => {
    
    const styledClasses = useMemo(() => {
      const TypographyVariants = cva(
        "h-fit",
        {
          variants: {
            intent: {
              primary: "text-white",
              secondary: "text-blue",
              warning: "text-yellow",
              danger: "text-red",
              disabled: "disabled opacity-50",
            },
            as: {
              h1: ["text-5xl", "p-2"],
              h2: ["text-4xl", "p-2"],
              h3: ["text-3xl", "p-2"],
              h4: ["text-2xl", "p-2"],
              h5: ["text-1xl", "p-2"],
              h6: ["text-xl", "p-2"],
              p: ["text-base", "p-1"],
              span: ["text-sm", "p-1"],
            },
          },
          defaultVariants: {
            intent: "primary",
            as: "p",
          },
        }
      );

      return `${italic ? "italic" : ""} font-${weight} ${TypographyVariants({ intent: type, as })} ${className}`;
    }, [as, className, italic, weight, type]);

    const ElementProps = {
      className: styledClasses,
      ref,
      onClick,
      ...props,
      ...(onClick && { tabIndex: 0, role: 'button' }), 
    };

    return React.createElement(as, ElementProps, children);
  }
);

Typography.displayName = "Typography";

export { Typography };

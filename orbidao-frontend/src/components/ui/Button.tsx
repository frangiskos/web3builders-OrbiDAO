import React, { forwardRef } from 'react';
import { Button as BaseButton, ButtonProps as BaseButtonProps } from '@nextui-org/button';

interface ButtonProps extends BaseButtonProps {
  children: React.ReactNode;
  isFullWidth?: boolean;
}

const Button = forwardRef<typeof BaseButton, ButtonProps>(({ children, ...props }, ref: any) => {
  return (
    <BaseButton {...{ ...props, ref }} disableRipple>
      {children}
    </BaseButton>
  );
});
Button.displayName = 'Button';

export { Button };

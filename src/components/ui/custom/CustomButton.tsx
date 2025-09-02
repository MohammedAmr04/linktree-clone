import React from 'react';
import { Button } from '../button';

interface CustomButtonProps extends React.ComponentProps<typeof Button> {
  children: React.ReactNode;
  className: string;
}

const CustomButton = ({ children, className, ...props }: CustomButtonProps) => {
  return (
    <Button
      className={`text-black font-medium px-16 py-8 rounded-full cursor-pointer w-fit transition-all duration-150 text-sm ${className}`}
      {...props}>
      {children}
    </Button>
  );
};

export default CustomButton;

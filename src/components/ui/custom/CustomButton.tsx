import React from "react";
import { Button } from "../button";

interface CustomButtonProps extends React.ComponentProps<typeof Button> {
  children: React.ReactNode;
  className: string;
}

const CustomButton = ({ children, className, ...props }: CustomButtonProps) => {
  return (
    <Button
      className={`${className} text-black font-medium px-16 py-8 text-lg rounded-full cursor-pointer`}
      {...props}
    >
      {children}
    </Button>
  );
};

export default CustomButton;

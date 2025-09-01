import React from "react";
import { Button } from "../button";

interface CustomButtonProps extends React.ComponentProps<typeof Button> {
  children: React.ReactNode;
}

const CustomButton = ({ children, ...props }: CustomButtonProps) => {
  return <Button {...props}>{children}</Button>;
};

export default CustomButton;

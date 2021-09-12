import React, { ButtonHTMLAttributes, FC } from "react";
import { ButtonStyled } from "./styled/ButtonStyled";

export const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  ...props
}) => {
  return <ButtonStyled {...props} />;
};

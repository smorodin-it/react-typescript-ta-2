import React, { ButtonHTMLAttributes, FC } from "react";
import { ButtonStyled } from "./styled/ButtonStyled";
import { ButtonProps } from "./types";

export const Button: FC<ButtonProps> = ({ ...props }) => {
  return <ButtonStyled {...props} />;
};

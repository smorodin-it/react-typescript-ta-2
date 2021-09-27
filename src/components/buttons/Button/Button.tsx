import React, { FC } from "react";
import { ButtonStyled } from "./styled/ButtonStyled";
import { ButtonProps } from "./types";
import { Medium16Font } from "../../fonts/Fonts";

export const Button: FC<ButtonProps> = ({ text, fontComponent, ...props }) => {
  const FontComponent = fontComponent ?? Medium16Font;

  return (
    <ButtonStyled {...props}>
      <FontComponent>{text}</FontComponent>
    </ButtonStyled>
  );
};

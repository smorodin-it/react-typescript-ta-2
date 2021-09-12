import React, { FC } from "react";
import { LabelStyled } from "./styled/LabelStyled";
import { LabelProps } from "./types";
import { Medium16Font } from "../../fonts/Fonts";

export const Label: FC<LabelProps> = ({ children, ...props }) => {
  return (
    <LabelStyled {...props}>
      <Medium16Font>{children}</Medium16Font>
    </LabelStyled>
  );
};

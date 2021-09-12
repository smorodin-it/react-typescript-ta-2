import React, { FC, InputHTMLAttributes } from "react";
import { InputStyled } from "./styled/InputStyled";
import { InputProps } from "./types";

export const Input: FC<InputProps> = ({ ...props }) => {
  return (
    <>
      <InputStyled {...props} />
    </>
  );
};

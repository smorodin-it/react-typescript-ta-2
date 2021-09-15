import React, { FC } from "react";
import { InputStyled } from "./styled/InputStyled";
import { InputProps } from "./types";
import { Label } from "../Label";
import { ValidationErrorMessage } from "../ValidationErrorMessage";
import { InputWrapperStyled } from "./styled/InputWrapperStyled";

export const Input: FC<InputProps> = ({ label, error, style, ...props }) => {
  return (
    <InputWrapperStyled style={style}>
      {label && <Label htmlFor={props.name}>{label}</Label>}
      <InputStyled id={props.name} autoComplete={"off"} {...props} />
      {error && <ValidationErrorMessage>{error}</ValidationErrorMessage>}
    </InputWrapperStyled>
  );
};

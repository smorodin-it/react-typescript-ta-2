import React, { FC } from "react";
import { InputStyled } from "./styled/InputStyled";
import { InputProps } from "./types";
import { Label } from "../Label";
import { ValidationErrorMessage } from "../ValidationErrorMessage";

export const Input: FC<InputProps> = ({ label, error, ...props }) => {
  return (
    <>
      {label && <Label htmlFor={props.name}>{label}</Label>}
      <InputStyled id={props.name} autoComplete={"off"} {...props} />
      {error && <ValidationErrorMessage>{error}</ValidationErrorMessage>}
    </>
  );
};

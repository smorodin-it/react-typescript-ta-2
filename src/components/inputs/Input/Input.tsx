import React, { FC } from "react";
import { InputStyled } from "./styled/InputStyled";
import { InputProps } from "./types";
import { Label } from "../Label";
import { ValidationErrorMessage } from "../ValidationErrorMessage";
import { InputWrapperStyled } from "./styled/InputWrapperStyled";

export const Input: FC<InputProps> = ({
  label,
  error,
  wrapperStyle,
  wide,
  ...props
}) => {
  return (
    <InputWrapperStyled style={wrapperStyle} wide={wide}>
      {label && <Label htmlFor={props.name}>{label}</Label>}
      <InputStyled
        {...props}
        id={props.name}
        autoComplete={"off"}
        wide={wide}
      />
      {error && <ValidationErrorMessage>{error}</ValidationErrorMessage>}
    </InputWrapperStyled>
  );
};

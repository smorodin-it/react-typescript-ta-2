import React, { FC } from "react";
import { InputStyled } from "./styled/InputStyled";
import { InputProps } from "./types";

export const Input: FC<InputProps> = ({ label, error, ...props }) => {
  return (
    <>
      {label && <label htmlFor={props.name}>{label}</label>}
      <InputStyled id={props.name} {...props} />
      {error && <div>{error}</div>}
    </>
  );
};

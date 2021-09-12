import React, { FC } from "react";
import { Medium14Font } from "../../fonts/Fonts";
import { ValidationErrorMessageStyled } from "./styled/ValidationErrorMessageStyled";
import { ValidationErrorMessageProps } from "./types";

export const ValidationErrorMessage: FC<ValidationErrorMessageProps> = ({
  children,
}) => {
  return (
    <ValidationErrorMessageStyled>
      <Medium14Font>{children}</Medium14Font>
    </ValidationErrorMessageStyled>
  );
};

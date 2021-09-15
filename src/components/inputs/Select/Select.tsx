import React, { FC, useContext, useState } from "react";
import { OptionObject, SelectProps } from "./types";
import SelectStyled from "./styled/SelectStyled";
import { SelectPlaceholderStyled } from "./styled/SelectPlaceholderStyled";
import { Label } from "../Label";
import { ValidationErrorMessage } from "../ValidationErrorMessage";

export const Select: FC<SelectProps> = ({
  label,
  placeholder,
  error,
  ...props
}) => {
  const [optionsList, setOptionsList] = useState<OptionObject[]>(
    [] as OptionObject[]
  );
  const [selectedObject, setSelectedObject] = useState<OptionObject>(
    {} as OptionObject
  );
  return (
    <>
      {label && <Label>{label}</Label>}
      <SelectStyled {...props}>
        {selectedObject.label ?? (
          <SelectPlaceholderStyled>{placeholder}</SelectPlaceholderStyled>
        )}
      </SelectStyled>
      {error && <ValidationErrorMessage>{error}</ValidationErrorMessage>}
    </>
  );
};

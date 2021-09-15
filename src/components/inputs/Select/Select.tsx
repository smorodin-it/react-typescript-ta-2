import React, { FC, useContext, useState } from "react";
import { OptionObject, SelectProps } from "./types";
import SelectStyled from "./styled/SelectStyled";
import { SelectPlaceholderStyled } from "./styled/SelectPlaceholderStyled";
import { Label } from "../Label";
import { ValidationErrorMessage } from "../ValidationErrorMessage";
import { SelectOptionsListStyled } from "./styled/SelectOptionsListStyled";
import { SelectWrapperStyled } from "./styled/SelectWrapperStyled";
import { SelectListItemStyled } from "./styled/SelectListItemStyled";
import { Regular16Font } from "../../fonts/Fonts";
import { ThemeContext } from "styled-components";

export const Select: FC<SelectProps> = ({
  options,
  label,
  placeholder,
  error,
  ...props
}) => {
  // const [optionsList, setOptionsList] = useState<OptionObject[]>(
  //   [] as OptionObject[]
  // );
  const [isOptionsOpened, setIsOptionsOpened] = useState<boolean>(false);
  const [selectedObject, setSelectedObject] = useState<OptionObject>(
    {} as OptionObject
  );
  const theme = useContext(ThemeContext);

  const onClickToShowOptionsHandler = () => {
    setIsOptionsOpened(true);
  };

  const onClickOptionHandler = (option: OptionObject) => {
    setSelectedObject(option);
    setIsOptionsOpened(false);
  };

  return (
    <>
      {label && <Label>{label}</Label>}
      <SelectWrapperStyled>
        <SelectStyled {...props} onClick={onClickToShowOptionsHandler}>
          {selectedObject.label ?? (
            <SelectPlaceholderStyled>{placeholder}</SelectPlaceholderStyled>
          )}
        </SelectStyled>
        {isOptionsOpened && (
          <SelectOptionsListStyled>
            {options.map((option) => (
              <SelectListItemStyled
                key={option.value}
                onClick={() => onClickOptionHandler(option)}
              >
                <Regular16Font style={{ color: theme.colors.darkGrey }}>
                  {option.label}
                </Regular16Font>
              </SelectListItemStyled>
            ))}
          </SelectOptionsListStyled>
        )}
      </SelectWrapperStyled>
      {error && <ValidationErrorMessage>{error}</ValidationErrorMessage>}
    </>
  );
};

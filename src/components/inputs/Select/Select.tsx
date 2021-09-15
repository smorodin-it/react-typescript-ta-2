import React, { FC, useContext, useRef, useState } from "react";
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
import { SelectArrowIconStyled } from "./styled/SelectArrowIconStyled";
import { useOnClickOutside } from "../../../utils/hooks/useOnClickOutside";

export const Select: FC<SelectProps> = ({
  options,
  label,
  placeholder,
  error,
  onChange,
  ...props
}) => {
  const [isOptionsOpened, setIsOptionsOpened] = useState<boolean>(false);
  const [selectedObject, setSelectedObject] = useState<OptionObject>(
    {} as OptionObject
  );
  const theme = useContext(ThemeContext);
  const ref = useRef(null);
  useOnClickOutside(ref, () => setIsOptionsOpened(false));

  const onClickToShowOptionsHandler = () => {
    setIsOptionsOpened(true);
  };

  const onClickOptionHandler = (option: OptionObject) => {
    setSelectedObject(option);
    setIsOptionsOpened(false);
    if (onChange) {
      onChange();
    }
  };

  return (
    <>
      {label && <Label>{label}</Label>}
      <SelectWrapperStyled ref={ref}>
        <SelectStyled {...props} onClick={onClickToShowOptionsHandler}>
          {selectedObject.label ?? (
            <SelectPlaceholderStyled>{placeholder}</SelectPlaceholderStyled>
          )}
          <SelectArrowIconStyled />
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
      {error && !isOptionsOpened && (
        <ValidationErrorMessage>{error}</ValidationErrorMessage>
      )}
    </>
  );
};

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
import { SelectComponentWrapperStyled } from "./styled/SelectComponentWrapperStyled";

export const Select: FC<SelectProps> = ({
  options,
  label,
  placeholder,
  error,
  onChange,
  wide,
  wrapperStyle,
  ...props
}) => {
  const [isOptionsOpened, setIsOptionsOpened] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [selectedObject, setSelectedObject] = useState<OptionObject>(
    {} as OptionObject
  );
  const theme = useContext(ThemeContext);
  const ref = useRef(null);
  useOnClickOutside(ref, () => setIsOptionsOpened(false));

  const onMouseEnterHandler = () => {
    setIsHovered(true);
  };

  const onMouseLeaveHandler = () => {
    setIsHovered(false);
  };

  const onClickToggleShowOptionsHandler = () => {
    setIsOptionsOpened((prevState) => !prevState);
  };

  const onClickOptionHandler = (option: OptionObject) => {
    setSelectedObject(option);
    setIsOptionsOpened(false);
    setIsHovered(false);
    if (onChange) {
      onChange(option);
    }
  };

  return (
    <SelectComponentWrapperStyled wide={wide} style={wrapperStyle}>
      {label && <Label>{label}</Label>}
      <SelectWrapperStyled
        wide={wide}
        ref={ref}
        onMouseEnter={onMouseEnterHandler}
        onMouseLeave={onMouseLeaveHandler}
      >
        <SelectStyled
          {...props}
          wide={wide}
          onClick={onClickToggleShowOptionsHandler}
          isHovered={isHovered}
        >
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
    </SelectComponentWrapperStyled>
  );
};

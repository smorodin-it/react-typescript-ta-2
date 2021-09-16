import React, { FC, useContext } from "react";
import { CheckboxFieldStyled } from "./styled/CheckboxFieldStyled";
import { CheckboxProps } from "./types";
import { Medium16Font } from "../../fonts/Fonts";
import { CheckboxWrapperStyled } from "./styled/CheckboxWrapperStyled";
import { ThemeContext } from "styled-components";

// TODO: Need to improve logic with getting checked status from props, and settings checked status/field in upper component

export const Checkbox: FC<CheckboxProps> = ({
  checked,
  onChange,
  children,
  style,
  ...props
}) => {
  const theme = useContext(ThemeContext);

  const onClickElementHandler = () => {
    onChange();
  };

  return (
    <CheckboxWrapperStyled style={style}>
      <CheckboxFieldStyled
        {...props}
        checked={checked}
        onClick={onClickElementHandler}
      />
      <Medium16Font
        onClick={onClickElementHandler}
        style={{ color: theme.colors.darkGrey, cursor: "pointer" }}
      >
        {children}
      </Medium16Font>
    </CheckboxWrapperStyled>
  );
};

import React, { FC, MouseEvent, useContext } from "react";
import { CheckboxFieldStyled } from "./styled/CheckboxFieldStyled";
import { CheckboxProps } from "./types";
import { Medium16Font } from "../../fonts/Fonts";
import { CheckboxWrapperStyled } from "./styled/CheckboxWrapperStyled";
import { ThemeContext } from "styled-components";

export const Checkbox: FC<CheckboxProps> = ({
  checked,
  onChange,
  text,
  fontComponent,
  clickableText,
  style,
  ...props
}) => {
  const theme = useContext(ThemeContext);

  const FontComponent = fontComponent ?? Medium16Font;

  const onClickElementHandler = () => {
    onChange();
  };

  const onClickTextHandler = (_: MouseEvent<HTMLSpanElement>): void => {
    if (clickableText) {
      onClickElementHandler();
    }
  };

  return (
    <CheckboxWrapperStyled style={style}>
      <CheckboxFieldStyled
        {...props}
        checked={checked}
        onClick={onClickElementHandler}
      />
      <FontComponent
        onClick={onClickTextHandler}
        style={{
          color: theme.colors.darkGrey,
          cursor: clickableText ? "pointer" : "default",
        }}
      >
        {text}
      </FontComponent>
    </CheckboxWrapperStyled>
  );
};

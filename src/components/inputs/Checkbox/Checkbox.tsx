import React, { FC, useState } from "react";
import { CheckboxFieldStyled } from "./styled/CheckboxFieldStyled";
import { CheckboxProps } from "./types";
import { Medium16Font } from "../../fonts/Fonts";
import { CheckboxWrapperStyled } from "./styled/CheckboxWrapperStyled";

// TODO: Need to improve logic with getting checked status from props, and settings checked status/field in upper component

export const Checkbox: FC<CheckboxProps> = ({
  setChecked,
  children,
  ...props
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(props.checked ?? false);

  const onClickElementHandler = () => {
    setIsChecked((prevState) => !prevState);
    if (setChecked) {
      setChecked((prevState) => !prevState);
    }
  };

  return (
    <CheckboxWrapperStyled>
      <CheckboxFieldStyled
        {...props}
        checked={isChecked}
        onClick={onClickElementHandler}
      />
      <Medium16Font
        onClick={onClickElementHandler}
        style={{ cursor: "pointer" }}
      >
        {children}
      </Medium16Font>
    </CheckboxWrapperStyled>
  );
};

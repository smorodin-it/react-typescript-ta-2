import React, { FC, useState } from "react";
import { CheckboxFieldStyled } from "./styled/CheckboxFieldStyled";
import { CheckboxProps } from "./types";

// TODO: Need to improve logic with getting checked status from props, and settings checked status/field in upper component

export const Checkbox: FC<CheckboxProps> = ({ setChecked, ...props }) => {
  const [isChecked, setIsChecked] = useState<boolean>(props.checked ?? false);

  const onClickElementHandler = () => {
    setIsChecked((prevState) => !prevState);
    if (setChecked) {
      setChecked((prevState) => !prevState);
    }
  };

  return (
    <>
      <CheckboxFieldStyled
        {...props}
        checked={isChecked}
        onClick={onClickElementHandler}
      />
    </>
  );
};

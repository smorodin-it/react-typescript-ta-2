import { Dispatch, InputHTMLAttributes, SetStateAction } from "react";

export interface CheckboxPropsForOmitInStyledComponent {
  setChecked: Dispatch<SetStateAction<boolean>>;
}

export interface CheckboxProps
  extends InputHTMLAttributes<HTMLInputElement>,
    CheckboxPropsForOmitInStyledComponent {}

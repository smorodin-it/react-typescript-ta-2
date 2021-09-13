import { Dispatch, InputHTMLAttributes, SetStateAction } from "react";

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  setChecked: Dispatch<SetStateAction<boolean>>;
}

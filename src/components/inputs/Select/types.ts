import { FC, HTMLAttributes } from "react";

export interface OptionObject {
  label: string;
  value: string;
  [key: string]: any;
}

export interface SelectPropsToRewrite {
  placeholder?: FC | string;
  onChange: (option: OptionObject) => void;
}

export interface SelectPropsToOmitInStyledComponent {
  options: OptionObject[];
  onChange: (option: OptionObject) => void;
}

export interface SelectProps
  extends Omit<HTMLAttributes<HTMLDivElement>, keyof SelectPropsToRewrite>,
    SelectPropsToRewrite,
    SelectPropsToOmitInStyledComponent {
  label?: string;
  error?: string;
  wide?: boolean;
  isHovered?: boolean;
}

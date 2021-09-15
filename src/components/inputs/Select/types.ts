import { FC, HTMLAttributes } from "react";

export interface OptionObject {
  label: string;
  value: string;
  [key: string]: any;
}

export interface SelectPropsToRewrite {
  placeholder?: FC | string;
  onChange: () => void;
}

export interface SelectPropsToOmitInStyledComponent {
  options: OptionObject[];
  onChange: () => void;
}

export interface SelectProps
  extends Omit<HTMLAttributes<HTMLDivElement>, keyof SelectPropsToRewrite>,
    SelectPropsToRewrite,
    SelectPropsToOmitInStyledComponent {
  label?: string;
  wide?: boolean;
  error?: string;
}

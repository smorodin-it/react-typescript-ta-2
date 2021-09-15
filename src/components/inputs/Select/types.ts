import { FC, HTMLAttributes } from "react";

export interface OptionObject {
  label: string;
  value: string;
  [key: string]: any;
}

export interface SelectPropsToRewrite {
  placeholder?: FC | string;
}

export interface SelectPropsToOmitInStyledComponent {
  options: OptionObject[];
}

export interface SelectProps
  extends Omit<HTMLAttributes<HTMLDivElement>, keyof SelectPropsToRewrite>,
    SelectPropsToRewrite,
    SelectPropsToOmitInStyledComponent {
  label?: string;
  wide?: boolean;
  error?: string;
}

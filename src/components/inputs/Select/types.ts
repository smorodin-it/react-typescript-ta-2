import { FC, HTMLAttributes } from "react";

export interface OptionObject {
  label: string;
  value: string;
  [key: string]: any;
}

export interface SelectPropsToRewrite {
  placeholder?: FC | string;
}

export interface SelectProps
  extends Omit<HTMLAttributes<HTMLDivElement>, keyof SelectPropsToRewrite>,
    SelectPropsToRewrite {
  options: OptionObject[];
  label?: string;
  wide?: boolean;
  error?: string;
}

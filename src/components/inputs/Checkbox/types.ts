import { FC, InputHTMLAttributes } from "react";

export interface CheckboxPropsToRewrite {
  onChange: () => void;
}

export interface CheckboxPropsToOmitInStyledComponent {
  onChange: () => void;
  text: string;
  fontComponent?: FC;
  clickableText?: boolean;
}

export interface CheckboxProps
  extends Omit<
      InputHTMLAttributes<HTMLInputElement>,
      keyof CheckboxPropsToRewrite
    >,
    CheckboxPropsToRewrite,
    CheckboxPropsToOmitInStyledComponent {
  text: string;
  fontComponent?: FC;
  clickableText?: boolean;
}

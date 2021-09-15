import { InputHTMLAttributes } from "react";

export interface CheckboxPropsToRewrite {
  onChange: () => void;
}

export interface CheckboxPropsToOmitInStyledComponent {
  onChange: () => void;
}

export interface CheckboxProps
  extends Omit<
      InputHTMLAttributes<HTMLInputElement>,
      keyof CheckboxPropsToRewrite
    >,
    CheckboxPropsToRewrite,
    CheckboxPropsToOmitInStyledComponent {}

// export interface CheckboxProps
//   extends InputHTMLAttributes<HTMLInputElement>,
//     CheckboxPropsForOmitInStyledComponent {}

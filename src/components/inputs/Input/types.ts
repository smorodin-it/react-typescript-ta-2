import { InputHTMLAttributes } from "react";
import { CSSProperties } from "styled-components";

interface InputWrapperStyledPropsToOmit {
  label?: string;
  error?: string | string[];
}

export interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    WideProp,
    InputWrapperStyledPropsToOmit {
  wrapperStyle?: CSSProperties;
}

export type InputWrapperStyledProps = Omit<
  InputProps,
  keyof InputWrapperStyledPropsToOmit
>;

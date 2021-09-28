import { FC, HTMLAttributes } from "react";
import { CSSProperties } from "styled-components";

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

export type SelectStyledProps = Omit<
  SelectProps,
  keyof SelectPropsToOmitInStyledComponent
>;

export interface SelectProps
  extends Omit<HTMLAttributes<HTMLDivElement>, keyof SelectPropsToRewrite>,
    SelectPropsToRewrite,
    SelectPropsToOmitInStyledComponent,
    WideProp,
    WideOptionsProp,
    IsHoveredProp {
  label?: string;
  error?: string;
  wrapperStyle?: CSSProperties;
}

export interface SelectComponentWrapperStyledProps extends WideProp {}

export interface SelectOptionsListStyledProps extends WideOptionsProp {}

export interface SelectArrowIconStyledProps extends IsHoveredProp {}

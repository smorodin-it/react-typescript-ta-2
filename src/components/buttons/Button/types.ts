import { ButtonHTMLAttributes, FC } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  wide?: boolean;
  fontComponent?: FC;
}

export type ButtonStyledProps = Omit<ButtonProps, "text">;

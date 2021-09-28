import { ButtonHTMLAttributes, FC } from "react";

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    WideProp {
  text: string;
  fontComponent?: FC;
}

export type ButtonStyledProps = Omit<ButtonProps, "text">;

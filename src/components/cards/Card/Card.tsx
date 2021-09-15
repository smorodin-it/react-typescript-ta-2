import React, { FC } from "react";
import { CardStyled } from "./styled/CardStyled";

export const Card: FC = ({ children }) => {
  return <CardStyled>{children}</CardStyled>;
};

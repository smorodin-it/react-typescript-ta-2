import styled, { css } from "styled-components/macro";
import arrowDown from "../assets/arrow-down-icon.svg";
import { SelectArrowIconStyledProps } from "../types";

const marginRightOnHover = css`
  margin-right: -2px;
`;

export const SelectArrowIconStyled = styled.div<SelectArrowIconStyledProps>`
  width: 30px;
  height: 30px;
  margin-left: 16px;
  ${({ isHovered }) => (isHovered ? marginRightOnHover : null)};

  background: url("${arrowDown}") no-repeat center;
`;

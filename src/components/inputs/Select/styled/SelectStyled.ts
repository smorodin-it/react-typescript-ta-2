import styled, { css } from "styled-components/macro";
import { SelectStyledProps } from "../types";
import { BaseInputStyled } from "../../BaseInputStyled/BaseInputStyled";
import { checkWide } from "../../../../utils/css/cssSnippets";

const hoveredStyle = css`
  margin: -1px -1px 7px;
  border: 2px solid ${({ theme }) => theme.colors.blue};
  outline: unset;
`;

const SelectStyled = styled.div<SelectStyledProps>`
  ${BaseInputStyled};
  ${checkWide};

  padding: 10px 11px 10px 16px;

  display: inline-flex;
  justify-content: space-between;
  align-items: center;

  cursor: pointer;

  ${({ isHovered }) => (isHovered ? hoveredStyle : null)};
`;

export default SelectStyled;

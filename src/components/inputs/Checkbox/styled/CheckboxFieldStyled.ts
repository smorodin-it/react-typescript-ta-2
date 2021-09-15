import styled, { css } from "styled-components/macro";
import { CheckboxProps, CheckboxPropsForOmitInStyledComponent } from "../types";
import checkedIcon from "../assets/check-icon.svg";

const checkedStyled = css`
  border: 2px solid ${({ theme }) => theme.colors.blue};
  background: url("${checkedIcon}") no-repeat center;
`;

export const CheckboxFieldStyled = styled.div<
  Omit<CheckboxProps, keyof CheckboxPropsForOmitInStyledComponent>
>`
  width: 28px;
  height: 28px;

  margin-right: 8px;

  border: 1px solid #dbe2ea;
  border-radius: 4px;
  box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.04);

  background: ${({ theme }) => theme.colors.white};
  cursor: pointer;

  ${({ checked }) => (checked ? checkedStyled : null)};
`;

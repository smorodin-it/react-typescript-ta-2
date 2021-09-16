import styled from "styled-components/macro";
import { ValidationErrorMessageProps } from "../types";

export const ValidationErrorMessageStyled = styled.div<ValidationErrorMessageProps>`
  color: ${({ theme }) => theme.colors.red};
  position: absolute;
  bottom: -13px;
`;

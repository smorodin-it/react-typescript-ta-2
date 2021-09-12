import styled from "styled-components/macro";
import { ValidationErrorMessageProps } from "../types";

export const ValidationErrorMessageStyled = styled.div<ValidationErrorMessageProps>`
  color: ${({ theme }) => theme.colors.red};
`;

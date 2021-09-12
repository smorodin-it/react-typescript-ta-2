import styled from "styled-components/macro";
import { LabelProps } from "../types";

export const LabelStyled = styled.label<LabelProps>`
  display: block;
  margin-bottom: 7px;

  color: ${({ theme }) => theme.colors.darkGrey};
`;

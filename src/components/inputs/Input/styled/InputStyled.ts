import styled from "styled-components/macro";
import { InputProps } from "../types";
import { checkWide } from "../../../../theme";
import { BaseInputStyled } from "../../BaseInputStyled/BaseInputStyled";

export const InputStyled = styled.input<InputProps>`
  ${checkWide};
  ${BaseInputStyled}
`;

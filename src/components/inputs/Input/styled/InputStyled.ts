import styled from "styled-components/macro";
import { InputProps } from "../types";
import { BaseInputStyled } from "../../BaseInputStyled/BaseInputStyled";
import { checkWide } from "../../../../utils/css/cssSnippets";

export const InputStyled = styled.input<InputProps>`
  ${BaseInputStyled}
  ${checkWide};
`;

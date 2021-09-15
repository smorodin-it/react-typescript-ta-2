import styled from "styled-components/macro";
import { SelectProps } from "../types";
import { BaseInputStyled } from "../../BaseInputStyled/BaseInputStyled";
import { checkWide } from "../../../../utils/css/cssSnippets";

const SelectStyled = styled.div<SelectProps>`
  ${checkWide};
  ${BaseInputStyled};
  display: inline-block;
`;

export default SelectStyled;

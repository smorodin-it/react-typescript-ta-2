import styled from "styled-components/macro";
import { SelectProps, SelectPropsToOmitInStyledComponent } from "../types";
import { BaseInputStyled } from "../../BaseInputStyled/BaseInputStyled";
import { checkWide } from "../../../../utils/css/cssSnippets";

const SelectStyled = styled.div<
  Omit<SelectProps, keyof SelectPropsToOmitInStyledComponent>
>`
  ${checkWide};
  ${BaseInputStyled};

  display: inline-block;

  margin-bottom: 4px;

  cursor: pointer;
`;

export default SelectStyled;

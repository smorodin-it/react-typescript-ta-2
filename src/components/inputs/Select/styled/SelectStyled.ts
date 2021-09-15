import styled from "styled-components/macro";
import { SelectProps, SelectPropsToOmitInStyledComponent } from "../types";
import { BaseInputStyled } from "../../BaseInputStyled/BaseInputStyled";
import { checkWide } from "../../../../utils/css/cssSnippets";

const SelectStyled = styled.div<
  Omit<SelectProps, keyof SelectPropsToOmitInStyledComponent>
>`
  ${checkWide};
  ${BaseInputStyled};

  margin-bottom: 4px;
  padding-right: 11px;

  display: inline-flex;
  justify-content: space-between;
  align-items: center;

  cursor: pointer;

  :hover {
    margin: -1px -1px 3px;

    border: 2px solid ${({ theme }) => theme.colors.blue};
    outline: unset;
  }
`;

export default SelectStyled;

import styled from "styled-components/macro";
import { checkWide } from "../../../../utils/css/cssSnippets";
import { SelectComponentWrapperStyledProps } from "../types";

export const SelectComponentWrapperStyled = styled.div<SelectComponentWrapperStyledProps>`
  display: inline-flex;
  flex-direction: column;
  ${checkWide};
`;

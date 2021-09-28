import styled from "styled-components/macro";
import { InputWrapperStyledProps } from "../types";
import { checkWide } from "../../../../utils/css/cssSnippets";

export const InputWrapperStyled = styled.div<InputWrapperStyledProps>`
  ${checkWide};
  display: inline-flex;
  flex-direction: column;

  position: relative;
`;

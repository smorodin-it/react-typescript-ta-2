import styled from "styled-components/macro";
import { SelectOptionsListStyledProps } from "../types";
import { checkWideOptions } from "../../../../utils/css/cssSnippets";

export const SelectOptionsListStyled = styled.div<SelectOptionsListStyledProps>`
  display: flex;
  flex-direction: column;

  ${checkWideOptions};
  padding: 12px 0px;

  position: absolute;
  top: 57px;
  z-index: 100;

  background: ${({ theme }) => theme.colors.white};

  border: 1px solid ${({ theme }) => theme.colors.light};
  border-radius: 6px;
  box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.04),
    0px 20px 20px rgba(44, 39, 56, 0.04);
`;

import styled from "styled-components/macro";
import { ButtonProps } from "../types";
import { checkWide } from "../../../../utils/css/cssSnippets";

export const ButtonStyled = styled.button<ButtonProps>`
  ${checkWide};
  padding: 18px 65px 17px 65px;

  background: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.lighter};

  border: none;
  border-radius: 6px;
  box-shadow: 0px 2px 4px rgba(44, 39, 56, 0.08),
    0px 4px 8px rgba(44, 39, 56, 0.08);

  cursor: pointer;

  :hover {
    box-shadow: 0px 12px 24px rgba(44, 39, 56, 0.08),
      0px 24px 48px rgba(44, 39, 56, 0.16);
  }

  :active {
    margin: -2px;

    border: 2px solid ${({ theme }) => theme.colors.darkOpacity};
    box-shadow: 0px 2px 4px rgba(44, 39, 56, 0.0001),
      0px 4px 8px rgba(44, 39, 56, 0.08);
  }

  :disabled {
    background: ${({ theme }) => theme.colors.light};
    color: ${({ theme }) => theme.colors.dark};
    box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.08);
    mix-blend-mode: normal;
    opacity: 0.5;
    pointer-events: none;
  }
`;

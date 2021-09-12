import styled from "styled-components/macro";
import { InputProps } from "../types";
import { checkWide } from "../../../../theme";

export const InputStyled = styled.input<InputProps>`
  ${checkWide};
  padding: 16px 57px 15px 16px;

  background: ${({ theme }) => theme.colors.white};

  font-family: "IBM Plex Sans", sans-serif;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.dark};

  border: 1px solid ${({ theme }) => theme.colors.light};
  border-radius: 6px;
  box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.04);

  :active,
  :focus {
    margin: -1px;

    border: 2px solid ${({ theme }) => theme.colors.blue};
    outline: unset;
  }
`;

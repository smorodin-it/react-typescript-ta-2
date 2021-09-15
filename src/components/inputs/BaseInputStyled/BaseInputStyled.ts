import { css } from "styled-components/macro";
import { BaseInputPlaceholderStyled } from "./BaseInputPlaceholderStyled";

export const BaseInputStyled = css`
  margin-bottom: 8px;
  padding: 16px 57px 16px 16px;

  background: ${({ theme }) => theme.colors.white};

  font-family: "IBM Plex Sans", sans-serif;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.dark};

  border: 1px solid ${({ theme }) => theme.colors.light};
  border-radius: 6px;
  box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.04);

  ::placeholder {
    ${BaseInputPlaceholderStyled};
  }

  :active,
  :focus {
    margin: -1px -1px 7px;

    border: 2px solid ${({ theme }) => theme.colors.blue};
    outline: unset;
  }
`;

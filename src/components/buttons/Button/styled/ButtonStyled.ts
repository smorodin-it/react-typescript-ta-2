import styled from "styled-components/macro";

export const ButtonStyled = styled.button`
  padding: 18px 65px 17px 65px;

  background: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.lighter};

  border: unset;
  border-radius: 6px;
  box-shadow: 0px 2px 4px rgba(44, 39, 56, 0.08),
    0px 4px 8px rgba(44, 39, 56, 0.08);

  :hover {
    box-shadow: 0px 12px 24px rgba(44, 39, 56, 0.08),
      0px 24px 48px rgba(44, 39, 56, 0.16);
  }

  :active {
    border: 2px solid ${({ theme }) => theme.colors.darkOpacity};
    box-shadow: 0px 2px 4px rgba(44, 39, 56, 0.0001),
      0px 4px 8px rgba(44, 39, 56, 0.08);
  }
`;

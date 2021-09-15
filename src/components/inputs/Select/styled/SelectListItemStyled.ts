import styled from "styled-components/macro";

export const SelectListItemStyled = styled.div`
  padding: 12px 15px;
  cursor: pointer;

  :hover {
    background: ${({ theme }) => theme.colors.lighter};
  }
`;

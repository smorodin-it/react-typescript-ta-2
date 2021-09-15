import styled from "styled-components/macro";

export const SelectOptionsListStyled = styled.div`
  display: inline-flex;
  flex-direction: column;

  padding: 12px 0px;

  background: ${({ theme }) => theme.colors.white};

  border: 1px solid ${({ theme }) => theme.colors.light};
  border-radius: 6px;
  box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.04),
    0px 20px 20px rgba(44, 39, 56, 0.04);
`;

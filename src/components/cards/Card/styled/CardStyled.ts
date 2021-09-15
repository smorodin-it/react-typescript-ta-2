import styled from "styled-components/macro";

export const CardStyled = styled.div`
  padding: 41px 30px;

  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  //align-items: stretch;

  background: ${({ theme }) => theme.colors.white};

  box-shadow: 0px 12px 24px rgba(44, 39, 56, 0.02),
    0px 32px 64px rgba(44, 39, 56, 0.04);
  border-radius: 24px;
`;

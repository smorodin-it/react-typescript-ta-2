import styled, { css } from "styled-components/macro";
import { rem } from "../../../../utils/functions/rem";

const BaseFont = css`
  font-family: "IBM Plex Sans", sans-serif;
  font-style: normal;
  color: inherit;
`;

const RegularFont = css`
  ${BaseFont};
  font-weight: 400;
`;

const MediumFont = css`
  ${BaseFont};
  font-weight: 500;
`;

const BoldFont = css`
  ${BaseFont};
  font-weight: 700;
`;

// Regular
export const Regular14Font = styled.span`
  ${RegularFont};
  font-size: ${rem("14px")};
`;
export const Regular16Font = styled.span`
  ${RegularFont};
  font-size: ${rem("16px")};
`;

// Medium
export const Medium16Font = styled.span`
  ${MediumFont};
  font-size: ${rem("16px")};
`;
export const Medium14Font = styled.span`
  ${MediumFont};
  font-size: ${rem("14px")};
`;

// Bold
export const Bold34Font = styled.span`
  ${BoldFont};
  font-size: ${rem("34px")};
`;

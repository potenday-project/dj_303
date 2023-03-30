import { css } from "@emotion/css";
import { suitBold, suitMedium, suitRegular } from "./font";

export const fontSuitBold = css`
  font-family: ${suitBold.style.fontFamily};
`;

export const fontSuitMedium = css`
  font-family: ${suitMedium.style.fontFamily};
`;

export const fontSuitRegular = css`
  font-family: ${suitRegular.style.fontFamily};
`;

export const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const marginBottom = (size: number) => css`
  margin-bottom: ${size}px;
`;

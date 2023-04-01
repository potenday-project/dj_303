import { css } from "@emotion/react";
import { suitBold, suitMedium, suitRegular } from "./font";

export const wideWidth = 1920;
export const desktopWidth = 992;
export const tabletWidth = 768;
export const smallWidth = 340;

export const mobileView = `@media (max-width: ${desktopWidth - 1}px)`;
export const tabletView = `@media (min-width: ${tabletWidth}px)`;
export const smallMobileView = `@media (max-width: ${smallWidth}px)`;
export const desktopView = `@media (min-width: ${desktopWidth}px)`;
export const wideView = `@media (min-width: ${wideWidth}px)`;

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

export const marginTop = (size: number) => css`
  margin-top: ${size}px;
`;

export const absoluteCenter = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

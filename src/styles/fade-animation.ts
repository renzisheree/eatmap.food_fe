import { css } from "styled-components";

/** CSS */
export const FadeStyled = css`
  opacity: 1;
  visibility: visible;
  transition: all 0.3s ease-in-out;
`;

export const FadeReverseStyled = css`
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  user-select: none;
  transition: all 0.3s ease-in-out;
`;

export const FadeWithTransformStyled = css`
  ${FadeStyled}
  transform: translateY(0px);
`;

export const FadeWithTransformReverseStyled = css`
  ${FadeReverseStyled}
  transform: translateY(-8px);
`;

import { css } from "styled-components";

interface ButtonStyleProps {
  readonly size?: Size;
  readonly long?: boolean;
  readonly icon?: boolean;
  readonly focusable?: boolean;
  readonly withIcon?: boolean;
  readonly sapStyle?: boolean;
}

type Size = "large" | "medium" | "small" | "tiny";

const ButtonSize: { [key in Size]: number } = {
  large: 52,
  medium: 40,
  small: 32,
  tiny: 26,
};

const WithIconStyle = css`
  svg,
  img {
    margin-right: 12px;
  }
`;

const IconStyle = css<ButtonStyleProps>`
  padding: 0px;
  width: ${({ size = "medium" }) => ButtonSize[size]}px;

  img,
  svg {
    max-width: 24px;
    max-height: 24px;
    margin: 0px !important;
  }
`;

export const ButtonStyle = css<ButtonStyleProps>`
  cursor: pointer;
  line-height: 24px;
  border: 0;
  border-radius: 4px;
  padding: 0;
  outline: 0;
  font-size: 14px;
  font-weight: 500;
  text-transform: capitalize;
  //letter-spacing: 0.1em;
  position: relative;
  min-height: ${({ size = "medium" }) => ButtonSize[size]}px;

  transition: all 0.3s ease-in-out;
  display: inline-flex;
  justify-content: center;
  align-items: center;

  ${({ icon }) => (icon ? IconStyle : "")};
  ${({ withIcon }) => (withIcon ? WithIconStyle : "")};

  img,
  svg {
    display: inline-block;

    :first-child:not(:last-child) {
      margin-right: 10px;
    }
  }
`;

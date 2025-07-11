import styled, { css } from "styled-components";
import { device } from "./media";

type Size = "large" | "medium" | "small" | "tiny";

const ButtonSize: { [key in Size]: number } = {
  large: 52,
  medium: 40,
  small: 32,
  tiny: 26,
};

const ButtonPadding: { [key in Size]: string } = {
  large: "14px 40px",
  medium: "4px 32px",
  small: "4px 20px",
  tiny: "0px 8px",
};

interface ButtonStyleProps {
  readonly size?: Size;
  readonly long?: boolean;
  readonly longer?: boolean;
  readonly icon?: boolean;
  readonly focusable?: boolean;
  readonly withIcon?: boolean;
  readonly sapStyle?: boolean;
  readonly block?: boolean;
  readonly borderWidth?: number;
}

interface RadioProps {
  readonly checked: boolean;
  readonly white?: boolean;
}

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

const LongStyle = css`
  padding: 0 80px;
  min-width: 226px;
`;

const LongerStyle = css`
  padding: 0;
  min-width: 200px;
`;

const FocusStyle = css`
  :focus {
    outline: 0 none;
    position: relative;
    /* box-shadow: 0 0 0 0.2rem rgb(232 119 34 / 33%); */
    :after {
      position: absolute;
      border-radius: 4px;
      content: "";
      top: -1.5px;
      left: -1.5px;
      right: -1.5px;
      bottom: -1.5px;
      border: 3px solid rgba(234, 88, 12, 0.5);
      user-select: none;
      pointer-events: none;
    }
  }
`;

const WithIconStyle = css`
  svg,
  img {
    margin-right: 12px;
  }
`;

const blockStyled = css`
  display: block;
  width: 100%;
`;

const SAPStyle = css`
  font-weight: 700;
  font-size: 17px;
  line-height: 20px;

  text-transform: initial;
  letter-spacing: 0;
`;

export const ButtonStyle = css<ButtonStyleProps>`
  cursor: pointer;
  line-height: 24px;
  border: 0;
  border-radius: 4px;
  /* padding: 14px 40px; */
  outline: 0;
  font-size: 16px;
  font-weight: 700;
  /* text-transform: capitalize; */
  /* letter-spacing: 0.1em; */
  position: relative;
  min-height: ${({ size = "medium" }) => ButtonSize[size]}px;
  padding: ${({ size = "medium" }) => ButtonPadding[size]};
  max-width: 100%;

  transition: all 0.3s ease-in-out;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

  ${({ icon }) => (icon ? IconStyle : "")};
  ${({ long }) => (long ? LongStyle : "")};
  ${({ longer }) => (longer ? LongerStyle : "")};
  ${({ focusable }) => (focusable ? FocusStyle : "")};
  ${({ withIcon }) => (withIcon ? WithIconStyle : "")};
  ${({ sapStyle }) => (sapStyle ? SAPStyle : "")}
  ${({ block }) => (block ? blockStyled : "")}

  @media ${device.mobile} {
    width: 100%;
  }

  img,
  svg {
    display: inline-block;

    :first-child:not(:last-child) {
      margin-right: 10px;
    }
  }
`;

export const PrimaryStyle = css`
  ${ButtonStyle}
  background: #ea580c;
  color: white;
  &:disabled {
    background: #9ca3af !important;
    border: 0 none !important;
    cursor: not-allowed;
  }
`;

const SecondaryStyle = css`
  ${ButtonStyle}
  color: #ea580c;
  border: 2px solid #ea580c;
  background: white;
  /* &:hover {
    color: white;
    background: #ea580c;
  } */

  &:disabled {
    color: #9ca3af !important;
    border-color: #9ca3af !important;
    cursor: not-allowed;
  }
`;

export const ButtonPrimary = styled.button`
  ${PrimaryStyle}
`;

export const ButtonSecondary = styled.button`
  ${SecondaryStyle}
`;

export const ButtonLinkPrimary = styled.a`
  ${PrimaryStyle}
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
`;

export const ButtonLinkSecondary = styled.a`
  ${SecondaryStyle}
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  &:hover {
    color: white;
    background: #ea580c;

    svg path {
      fill: white;
    }
  }
`;

export const Link = styled.a`
  display: inline-flex;
  text-decoration: none;
  font-weight: 500;

  img,
  svg {
    display: inline-block;

    &:first-child {
      margin-right: 10px;
    }
  }

  &:hover {
    text-decoration: underline;
  }

  &:focus {
    box-shadow: 0 0 0 0.2rem rgb(232 119 34 / 33%);
  }
`;

const CheckedRadioCss = css`
  :before {
    content: "";
    position: absolute;
    top: 10px;
    left: 8px;
    height: 6px;
    width: 6px;
    border-radius: 50%;
    background: #ea580c;
  }
  &:after {
    border-width: 4px;
  }
`;

export const Radio = styled.button<RadioProps>`
  display: block;
  padding-left: 32px;
  position: relative;
  border: none;
  background: none;
  text-align: left;
  cursor: pointer;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;

  &:after {
    content: "";
    position: absolute;
    top: 2px;
    left: 0;
    height: 22px;
    width: 22px;
    border-radius: 50%;
    border: 2px solid #ea580c;
  }

  ${({ checked }) => (checked ? CheckedRadioCss : "")}
`;

const CheckedCheckBox = css<RadioProps>`
  :after {
    background-color: #ea580c;
    background-image: url("data:image/svg+xml;base64, PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTEiIHZpZXdCb3g9IjAgMCAxNiAxMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUuNTk0NjcgMTAuNzkzOEwwLjcxOTY2MSA2LjIxNzYxQzAuNDI2NzggNS45NDI2OSAwLjQyNjc4IDUuNDk2OTIgMC43MTk2NjEgNS4yMjE5N0wxLjc4MDMgNC4yMjYzMkMyLjA3MzE4IDMuOTUxMzcgMi41NDgwOCAzLjk1MTM3IDIuODQwOTYgNC4yMjYzMkw2LjEyNSA3LjMwOTAyTDEzLjE1OSAwLjcwNjE5NkMxMy40NTE5IDAuNDMxMjY4IDEzLjkyNjggMC40MzEyNjggMTQuMjE5NyAwLjcwNjE5NkwxNS4yODAzIDEuNzAxODRDMTUuNTczMiAxLjk3Njc3IDE1LjU3MzIgMi40MjI1MyAxNS4yODAzIDIuNjk3NDlMNi42NTUzMyAxMC43OTM4QzYuMzYyNDIgMTEuMDY4NyA1Ljg4NzU1IDExLjA2ODcgNS41OTQ2NyAxMC43OTM4WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==");
    background-size: contain;
    background-repeat: no-repeat;
    border: 1px solid ${({ white }) => (white ? "white" : "#ea580c")};
  }
`;

export const CheckBox = styled.button<RadioProps>`
  display: block;
  position: relative;
  border: none;
  // background: white;
  text-align: left;
  width: 20px;
  height: 20px;
  cursor: pointer;
  :after {
    content: "";
    display: block;
    width: 20px;
    height: 20px;
    position: absolute;
    left: 0px;
    top: 0px;
    background-position: center center;
    background-size: cover;
    border-radius: 4px;
    border: 1px solid ${({ white }) => (white ? "white" : "#ea580c")};
  }
  &:hover {
    :after {
      border-width: 2px;
    }
  }

  ${({ checked }) => (checked ? CheckedCheckBox : "")};
  :disabled {
    :after {
      background-color: #9ca3af;
      border-color: #9ca3af;
      cursor: not-allowed;
    }
  }
`;

export const ButtonClose = styled.button`
  margin: 0;
  outline: 0;
  border-radius: 4px;
  background-color: transparent;
  background-image: url(${process.env.basePath}/img/ic_close.svg);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 18px 18px;
  width: 24px;
  height: 24px;

  position: absolute;
  top: 30px;
  right: 37px;
  border: 0;

  :focus {
    box-shadow: 0 0 0 0.2rem rgb(232 119 34 / 33%);
  }
`;

export const ButtonLink = styled.button<{ underline?: boolean }>`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  text-decoration-line: ${({ underline }) =>
    underline ? "underline" : "none"};
  color: #ea580c;
  text-align: right;
  border: none;
  background: none;
  display: inline-flex;
  align-items: center;
  padding: 0px;

  cursor: pointer;

  img:last-child {
    margin-left: 6px;
  }

  :disabled {
    color: #9ca3af !important;
  }
`;

export const ButtonClearInput = styled.button`
  border: none;
  position: absolute;
  width: 18px;
  height: 18px;
  background: rgba(124, 135, 142, 0.133);
  border-radius: 9px;
  top: calc(50% - 9px);
  display: flex;
  align-items: center;
  justify-content: center;
  right: 12px;

  img {
    width: 8px;
    height: 8px;
    top: auto;
    left: auto;
  }
`;

export const ButtonIcon = styled.button<{
  size?: Size;
  focusable?: boolean;
  border?: string;
  background?: string;
}>`
  cursor: pointer;
  border: 0;
  border-radius: 4px;
  padding: 0px;
  outline: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: ${({ size = "small" }) => ButtonSize[size]}px;
  width: ${({ size = "small" }) => ButtonSize[size]}px !important;
  border: ${({ border }) => (border ? `2px solid ${border}` : "none")};
  background: ${({ background }) => background || "transparent"};

  transition: all 0.3s ease-in-out;
  ${({ focusable }) => (focusable ? FocusStyle : "")};
  :hover {
    background-color: rgba(234, 88, 12, 0.2);
  }
  :disabled {
    cursor: not-allowed;
  }
`;

export const ButtonOutline = styled.button<ButtonStyleProps>`
  ${ButtonStyle}
  color: #ea580c;
  border: ${({ borderWidth }) =>
    borderWidth ? `${borderWidth}px solid #ea580c` : "1px solid #ea580c"};
  border-radius: 4px;
  background: white;

  font-weight: 700;
  font-size: 14px;
  line-height: 125%;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  svg path {
    transition: all 0.3s ease-in-out;
  }
  &:hover {
    color: white;
    background: #ea580c;
    svg path {
      fill: white;
      transition: all 0.3s ease-in-out;
    }
  }
`;

export const ButtonViewMore = styled(ButtonSecondary)`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 180px;
  max-height: 32px;
  min-height: 32px;
  min-width: 100px;
  padding: 0;
  margin-left: 8px;

  svg {
    margin-right: 7px;
  }
`;

export const Button = styled.button<ButtonStyleProps>`
  ${ButtonStyle}
`;

export const ButtonSave = styled(ButtonOutline)`
  @media ${device.mobile} {
    min-height: 40px !important;
    border: 2px solid;
    font-size: 16px;
  }
`;

import styled, { DefaultTheme } from "styled-components";
import { device } from "./media";

export const renderColor = (color: string | undefined, theme: DefaultTheme) => {
  if (color == "primary") {
    return theme.color.status.primary;
  }
  if (color == "red") {
    return theme.color.status.red;
  }
  if (color == "gray") {
    return theme.color.status.gray1;
  }
  return color || theme.color?.text?.body;
};

export const Container = styled.div`
  max-width: 1240px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 16px;
  padding-right: 16px;
`;

export const Row = styled.div<{
  align?: "center" | "start" | "end";
  justify?: "center" | "start" | "end";
  rowGap?: number;
  rowGapMb?: number;
}>`
  display: flex;
  flex-wrap: wrap;
  margin-left: -10px;
  margin-right: -10px;
  min-width: 100%;
  align-items: ${({ align }) => align || "start"};
  row-gap: ${({ rowGap }) => rowGap || 0}px;
  ${({ justify }) => (justify ? `justify-content: ${justify};` : "")};

  @media ${device.mobile} {
    row-gap: ${({ rowGapMb }) => rowGapMb || 0}px;
  }
`;

export const Grid = styled.div<{
  gap?: number;
  columns?: string;
  smColumns?: string;
}>`
  display: grid;
  flex-wrap: wrap;
  grid-template-columns: ${({ columns = "auto auto" }) => columns};

  min-width: 100%;
  gap: ${({ gap = 20 }) => gap}px;

  @media ${device.mobile} {
    grid-template-columns: ${({ smColumns = "auto auto" }) => smColumns};
  }
`;

interface FlexProps {
  align?:
    | "center"
    | "start"
    | "end"
    | "inherit"
    | "baseline"
    | "flex-start"
    | "stretch";
  justify?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around";
  gap?: number;
  gapMb?: number;
  directionMobile?: "row" | "row-reverse" | "column" | "column-reverse";
}
export const Flex = styled.div<FlexProps>`
  display: flex;
  align-items: ${({ align }) => align || "stretch"};
  gap: ${({ gap }) => gap || "0"}px;
  justify-content: ${({ justify }) => justify ?? "flex-start"};

  @media ${device.mobile} {
    gap: ${({ gapMb, gap }) => gapMb || gap || "0"}px;
    ${({ directionMobile }) =>
      directionMobile ? `flex-direction: ${directionMobile};` : ""}
  }
`;
export const FlexColumn = styled(Flex)`
  flex-direction: column;
`;

export const FlexFill = styled.div`
  flex: 1;
`;

interface TextProps {
  size?: number;
  color?: string;
  bold?: boolean;
  bolder?: boolean;
  mb?: number;
  align?: "left" | "right" | "center";
}
export const Text = styled.p<TextProps>`
  margin: 0;
  margin-bottom: ${({ mb }) => mb || 0}px;
  font-size: ${({ size }) => size || 16}px;
  color: ${({ color, theme }) => renderColor(color, theme)};
  font-weight: ${({ bold, bolder }) => (bolder ? 500 : bold ? 700 : 400)};
  text-align: ${({ align }) => align};
`;

export const Label = styled.p<{ primary?: boolean }>`
  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  color: ${({ primary, theme }) =>
    primary ? theme.color.status.primary : "#636566;"};
  margin-bottom: 8px;

  @media ${device.mobile} {
    margin-bottom: 10px;
    font-size: 14px !important;
  }
`;
export const ValueText = styled.p<{
  primary?: boolean;
  align?: "left" | "right" | "center";
}>`
  font-weight: 700;
  font-size: 16px;
  line-height: 125%;
  color: ${({ primary, theme }) =>
    primary ? theme.color.status.primary : theme.color.text.body};
  text-align: ${({ align }) => align || "left"};
`;

export const ValueImage = styled.div`
  width: 60px;
  height: 60px;
  margin: 4px;
  display: inline-block;

  position: relative;

  border-radius: 8px;
  border: 1px solid #edeff0;
  overflow: hidden;

  cursor: ${(onClick) => (onClick ? "pointer" : "unset")};

  img {
    width: 100%;
    height: 100%;

    object-fit: cover;
  }
`;

interface ColProps {
  md?: number ;
  sm?: number;
  lg?: number;
  flex?: number;
  pd?: number;
}
export const ColDivider = styled.div<{ height?: number; color?: string }>`
  height: ${({ height }) => height || 20}px;
  width: 1px;
  margin-left: -1px;
  background: ${({ theme, color }) => color || theme.color.status.gray2};
  @media ${device.mobile} {
    width: 100%;
    height: 1px;
  }
`;

export const ColLine = styled.div<{ height?: number; color?: string }>`
  height: ${({ height }) => height || 1}px;
  background: ${({ theme, color }) => color || theme.color.status.gray2};
`;

export const Col = styled.div<ColProps>`
  width: ${({ md = 12 }) => 100 * (md / 12)}%;
  padding: ${({ pd }) => (pd ? `0 ${pd}px` : "0 10px")};
  align-self: stretch;

  ${({ flex }) => flex && `flex: ${flex};`} @media
    ${device.mobile} {
    width: ${({ sm = 12 }) => 100 * (sm / 12)}%;
  }
`;

export const CardStyled = {
  Wrap: styled.div`
    padding: 24px 16px;
    background: #ffffff;
    border: 1px solid ${({ theme }) => theme.color.status.primary};
    border-radius: 16px;
    margin-bottom: 20px;
    cursor: pointer;
    transition: all 0.3s linear;
    @media ${device.mobile} {
      padding: 20px 16px;
      min-width: 100%;
    }
    &:hover {
      transition: all 0.3s linear;
      background: ${({ theme }) => theme.color.status.primary};
      p {
        color: white;
      }
      .icon-hover {
        display: inline-block;
      }
      .icon-nohover {
        display: none;
      }
    }
  `,
  Icon: styled.div``,
  Header: styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 28px;
    justify-content: space-between;
    @media ${device.mobile} {
      margin-bottom: 8px;
      img.header-icon {
        height: 40px;
        bottom: 40px;
      }
    }
    .icon-hover {
      display: none;
    }
    .icon-nohover {
      display: inline-block;
    }
  `,
  Title: styled.p`
    font-weight: 500;
    font-size: 20px;
    line-height: 150%;

    min-height: 60px;

    color: #183028;
    @media ${device.mobile} {
      font-size: 14px;
      margin-bottom: 8px;
      line-height: 125%;
    }
  `,
  Count: styled.p`
    color: #183028;
    font-weight: 700;
    font-size: 39px;
    line-height: 125%;

    @media ${device.mobile} {
      font-size: 20px;
    }
  `,
};

export const Item = styled.div<{ dark?: boolean }>`
  background: ${({ dark }) => (dark ? "#EDEFF0" : "#fff")};
  border: 1px solid ${({ dark }) => (dark ? "#EDEFF0" : "#dbdfe1")};
  border-radius: 16px;
  padding: 16px;
  position: relative;
  overflow: hidden;
  cursor: ${({ onClick }) => (onClick ? "pointer" : "unset")};
  transition: all 0.2s linear;
  .item-row {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .item-box {
    background: #f8f9f9;
    border-radius: 8px;
    padding: 16px;
  }
  .label {
    font-weight: 500;
    font-size: 14px;
    line-height: 125%;
    margin-bottom: 10px;

    color: #636566;
  }
  .value {
    font-weight: 700;
    font-size: 16px;
    line-height: 125%;
    color: #183028;
  }

  &:hover {
    box-shadow: 0px 9px 11px 0px rgba(0, 0, 0, 0.2);
    transition: all 0.2s linear;
  }

  &.no-hover {
    &:hover {
      box-shadow: none;
    }
  }
`;

export const ScreenWrapper = styled.div`
  padding-top: 40px;
  padding-bottom: 40px;

  @media ${device.mobile} {
    padding-top: 24px;
  }
`;

interface CardProps {
  rad?: number;
  pad?: number;
  bg?: string;
  bd?: number;
  mbd?: boolean;
  mpd?: number;
  mag?: number;
  mmt?: number;
}
export const Card = styled.div<CardProps>`
  background: ${({ bg = "#ffffff" }) => bg};
  border: ${({ bd = 1, mbd = true }) => mbd && bd}px solid #dbdfe1;
  border-radius: ${({ rad = 16 }) => rad}px;
  padding: ${({ pad = 40 }) => pad}px;
  margin-top: ${({ mag = 16 }) => mag}px;

  @media ${device.mobile} {
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;

  :not(:first-child) {
    margin-top: 50px;
  }

  h5 {
    color: #183028;
    flex: 1;
    @media ${device.mobile} {
      font-size: 20px;
    }
  }
`;

export const IconCircle = styled.div`
  width: 36px;
  height: 36px;
  background: #ea580c;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WrapStyled = styled.div`
  .content {
    background: #ffffff;

    border: 1px solid #dbdfe1;
    border-radius: 24px;
    padding: 40px;

    @media ${device.mobile} {
      padding: 16px;
    }
  }
`;

export const Note = styled.div<{ br?: number }>`
  margin-top: 24px;
  padding: 20px;
  border-radius: ${({ br }) => (br ? `${br}px` : "16px")};
  background: ${({ theme }) => theme.color.status.gray2_50};

  ul {
    margin-top: 10px;
    padding-left: 20px;
    margin-left: 0 !important;

    li {
      margin: 0 !important;
      text-align: justify;

      :not(:first-child) {
        padding-top: 5px;
      }

      ul {
        li {
          :not(:first-child) {
            padding-top: 0px;
          }

          padding-top: 0px;
        }
      }
    }
  }

  a {
    color: ${({ theme }) => theme.color.status.primary};
  }

  @media ${device.mobile} {
    margin-top: 16px;
    padding: 16px;
  }
`;

//ivr
export const RadioWrapper = styled.div`
  transform: translateX(5px);

  button {
    width: fit-content !important;
    height: fit-content !important;
  }

  h6 {
    margin-left: 10px;
  }

  @media ${device.mobile} {
    transform: translateX(0px);
  }
`;

export const IvrContentWrapper = styled.div`
  width: 100%;

  tbody {
    tr > td {
      :first-child {
        width: 50px;
        text-align: center;
      }
    }
  }

  @media ${device.mobile} {
    /* margin-bottom: 110px; */
    h5 {
      font-size: 20px;
    }

    .content {
      padding: 0;
      border: none;
    }
  }
`;
export const TableScroll = styled.div`
  .table-container {
    overflow-x: auto;
    overflow-y: hidden;

    ::-webkit-scrollbar {
      height: 7px;
    }

    ::-webkit-scrollbar-track {
      background: transparent;
    }

    ::-webkit-scrollbar-thumb {
      background: #dbdfe1;
      border-radius: 8px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: #888;
    }
  }

  @media ${device.mobile} {
    .table-container {
      ::-webkit-scrollbar {
        display: none;
      }

      scrollbar-width: none;
      -webkit-overflow-scrolling: touch;
    }
  }
`;

export const FragmentWrapper = styled.div``;

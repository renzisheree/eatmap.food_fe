import styled from "styled-components";

export const CheckBoxWrapper = styled.button<{
  lineMiddleSquare?: boolean;
  checked: boolean;
  isWhiteBorder?: boolean;
  isTopCheckbox?: boolean;
}>`
  padding: 0px;
  position: relative;
  cursor: pointer;
  background-color: transparent;

  svg {
    position: absolute;
    left: 0px;
    top: ${({ isTopCheckbox }) => (isTopCheckbox ? "15px" : "50%")};
    transform: translateY(-50%);
  }

  :after {
    content: "";
    width: 20px;
    height: 20px;

    position: absolute;
    left: 2px;
    top: ${({ isTopCheckbox }) => (isTopCheckbox ? "15px" : "50%")};
    transform: translateY(-50%);

    border-radius: 4px;
    border: 2px solid
      ${({ theme, isWhiteBorder }) =>
        isWhiteBorder ? "#ffffff" : theme.color.status.primary};

    background: ${({ checked, lineMiddleSquare }) =>
      lineMiddleSquare || checked ? "transparent" : "#ffffff"};

    background-color: ${({ isWhiteBorder }) => isWhiteBorder && "transparent"};
    transition: ${({ lineMiddleSquare }) =>
      !lineMiddleSquare ? "" : "0.2s all ease-in-out"};
  }

  &:disabled {
    opacity: 0.5;
  }
  :hover {
    ::after {
      background: ${({ checked, theme }) =>
        checked ? "transparent" : theme.color.status.primary};
    }
  }

  &:disabled {
    opacity: 0.5;
    &::after {
      // background: white;
    }
  }
`;

export const Label = styled.p<{ noLabel?: boolean }>`
  padding-left: ${({ noLabel }) => (noLabel ? "20px" : "34px")};

  line-height: 20px;
  text-align: left;
  color: ${({ theme }) => theme.color.text.body};
`;

import { device } from "@/styles/media";
import styled from "styled-components";

export const DropDownWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  .changeColor {
    border-color: #ea580c;

    border-radius: 4px 4px 0px 0px;

    :after {
      border-top-color: #ea580c;
    }

    :hover {
      border-color: #ea580c;
    }
  }

  .view-jobs {
    position: absolute;
    z-index: 2;
    top: -5px;
    left: 100px;
  }
  @media ${device.mobile} {
    margin-top: 8px;
  }
`;

export const DropDownFiled = styled.div<{
  $active?: boolean;
  $error?: boolean;
  disabled?: boolean;
  size?: "sm" | "lg" | "md";
}>`
  align-items: center;
  border-radius: 4px;
  height: ${({ size }) => (size == "sm" ? 40 : size == "lg" ? 60 : 50)}px;
  position: relative;

  transition: all 0.3s ease-in-out;

  background-color: #ffff;
  cursor: pointer;
  border: 1px solid
    ${({ $active, $error }) =>
      $error
        ? "#dc2626"
        : $active
        ? "#ea580c"
        : "#d1d5db"};

  > svg {
    position: absolute;
    top: 50% !important;
    right: 0px !important;
    width: 24px;
    height: 24px;
    transform: translate(-50%, -50%);
  }

  :hover {
    border-color: #f97316;
  }

  ${({ $active }) =>
    $active
      ? `
    :before {
      position: absolute;
      border-radius: 4px;
      content: "";
      top: -1.5px;
      left: -1.5px;
      right: -1.5px;
      user-select: none;
      pointer-events: none;
    }
  `
      : ""};

  ${({ disabled }) =>
    disabled
      ? `
    cursor: not-allowed;
    background: #f3f4f6;
    border-color: #d1d5db;`
      : ""};

  p {
    white-space: nowrap;
    max-width: 90%;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 400;
    margin: 0;
    padding-left: 12px;
    padding-top: ${({ size }) => (size == "sm" ? 8 : size == "lg" ? 15 : 12)}px;
    color: #9ca3af;
    &.value {
      color: #374151;
    }
  }
`;

export const ListWrapper = styled.div<{ positionList?: string }>`
  position: absolute;

  ${({ positionList }) =>
    positionList == "UP" ? "bottom: 50px;" : "top: 50px;"};
  left: 0px;
  width: 100%;
  z-index: 1200;
  max-height: 300px;
  overflow: auto;
  border: 1px solid #dbdfe1;
  box-shadow: 0px 16px 30px rgba(132, 156, 152, 0.2);
  border-radius: 4px;
`;

export const List = styled.div`
  padding: 8px 0px;
  background-color: #ffffff;

  li {
    display: flex;
    position: relative;
    list-style: none;
    padding-bottom: 16px;

    .check {
      position: absolute;
      right: -320px;
      padding: 0px;

      :focus {
        :before {
          top: 3.5px;
          left: -0.5px;
          z-index: 100;
        }
      }
    }
  }

  > button {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    cursor: pointer;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;

    padding: 10px 16px;
    transition: all 0.3s ease-in-out;

    span {
      text-align: left;
      width: calc(100% - 20px);
      color: #000000;
    }
    svg {
      display: block;
      position: absolute;
      top: calc(50% - 5px);
      right: 10px;
      z-index: 10;

      width: 20px;
      height: 10px;
    }

    :hover {
      color: #ea580c;
    }
    :focus {
      :before {
        position: absolute;
        border-radius: 4px;
        content: "";
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
        border: 3px solid #f97316;
        user-select: none;
        pointer-events: none;
      }
    }
  }
`;

export const WrapperDetailJob = styled.div`
  h5 {
    font-style: normal;
    font-weight: bold;
  }
  ul {
    margin-bottom: 0;
    margin-top: 0;
  }
  li {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
  }
`;

export const Error = styled.span`
  margin-top: 4px;
  color: #dc2626;
  display: block;
  font-size: 12px;
`;

export const SearchWrapper = styled.div`
  position: relative;
  padding: 8px;
  border-bottom: 1px solid #dbdfe1;
  background-color: white;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 36px;
  padding: 8px 36px;
  border: 1px solid #dbdfe1;
  border-radius: 4px;
  font-size: 14px;
  line-height: 20px;
  outline: none;

  &:focus {
    border-color: #ea580c;
  }

  &::placeholder {
    color: #6f7271;
  }
`;

export const SearchIconWrapper = styled.div`
  position: absolute;
  left: 15px;
  top: 26px;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  pointer-events: none;
`;

export const ClearButton = styled.button`
  position: absolute;
  right: 15px;
  top: 26px;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  background: none;
  border: none;
  padding: 4px;
  cursor: pointer;
  border-radius: 50%;

  &:hover {
    background-color: #f5f5f5;
  }
`;

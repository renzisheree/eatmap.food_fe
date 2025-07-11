import { device } from "@/styles/media";
import styled from "styled-components";

export const WrapperSelectLimited = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 200px;
  p.value {
    font-size: 14px;
  }
  @media ${device.mobile} {
    display: none;
  }
`;

export const EntriesPage = styled.span`
  color: #bdc3c7;
  font-size: 14px;
  line-height: 18px;
  white-space: nowrap;
  @media ${device.mobile} {
    display: none;
  }
`;

export const SelectWrapper = styled.select`
  width: 110px;
  height: 32px;
  position: relative;
  margin-right: 12px;
  background: white;
  border: 1px solid ${({ theme }) => theme.color.status.gray2};
  border-radius: 4px;
  padding: 0 14px;
`;

export const SelectFiled = styled.button`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 12px 32px 12px 16px;

  position: relative;

  border: 1px solid ${({ theme }) => theme.color.status.gray2};
  border-radius: 4px;
  transition: all 0.3s ease-in-out;

  background-color: #ffff;
  .value {
    color: ${({ theme }) => theme.color.text.heading};
  }

  :after {
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    right: 0px;
    width: 24px;
    height: 24px;
    // background: url(/nb/images/icon/icon_up_down_small.svg);
    background-repeat: no-repeat;
    transform: translate(-50%, -50%);
    background-position: center;
  }
  :hover {
    border-color: ${({ theme }) => theme.color.status.primary_50};
  }

  :focus {
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
  }

  h5 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 400;
    color: #0a3b32;
  }
`;

export const List = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  transform: translateY(-100%);

  max-height: 200px;
  overflow: auto;

  padding: 8px 0px;
  margin-bottom: 0px;

  border: 1px solid ${({ theme }) => theme.color.status.primary};
  border-radius: 0px 0px 4px 4px;
  background-color: #ffffff;
  z-index: 100;

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
    position: relative;
    width: 100%;

    font-weight: 400;
    font-size: 16px;
    line-height: 24px;

    padding: 10px 16px;
    transition: all 0.3s ease-in-out;

    span {
      text-align: left;
      width: calc(100% - 20px);
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
      color: ${({ theme }) => theme.color.status.primary};
    }
    :focus {
      :before {
        position: absolute;
        border-radius: 4px;
        content: "";
        top: -1.5px;
        left: -1.5px;
        right: -1.5px;
        bottom: -1.5px;
        border: 3px solid ${({ theme }) => theme.color.status.primary_50};
        user-select: none;
        pointer-events: none;
      }
    }
  }

  @media (max-width: 450px) {
    max-height: 130px;
  }
`;

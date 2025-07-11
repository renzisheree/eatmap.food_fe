import ReactInputMask from "react-input-mask";
import styled, { css } from "styled-components";

import { ButtonStyle } from "./button-styled";
import { FadeWithTransformReverseStyled, FadeWithTransformStyled } from "@/styles/fade-animation";

interface FieldSetProp {
  readonly disabled: boolean;
  readonly active: boolean;
  readonly error: string | boolean;
}

interface LabelProps {
  $focus?: boolean;
  $disabled?: boolean;
  $haveValue?: boolean;
  $type?: string;
  $required?: boolean;
}

export const DatePickerWrapper = styled.div`
  width: 320px;
  padding: 8px 8px 8px 12px;

  position: relative;
  border-radius: 4px;
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
`;

export const DatePickerContent = styled.div``;

export const DatePickerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 16px;
`;

export const HeaderButton = styled.button`
  ${ButtonStyle as any}

  padding: 0px 10px;
  font-weight: 400;
  text-transform: unset;

  h6 {
    color: #ea580c;
    font-weight: 400;
    margin-bottom: 0;
  }
`;

export const WeekWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  &:not(:last-child) {
    margin-bottom: 4px;
  }
`;

export const WeekTitleWrapper = styled(WeekWrapper)`
  p {
    font-weight: 500;
    width: 38px;
    height: 38px;
    text-align: center;
  }

  h4:last-child {
    color: #ea580c;
  }
`;

export const DaysWrapper = styled.div``;

export const DayButton = styled.button<{
  dateActive?: boolean;
  currentMonth?: boolean;
}>`
  ${ButtonStyle as any}
  width: 38px;
  height: 38px;
  min-height: 38px;
  padding: 0px;

  border-radius: 999px;
  color: ${({ currentMonth, dateActive }) => {
    if (dateActive) {
      return "white";
    }

    if (currentMonth) {
      return "#374151";
    }

    return "#DBDFE1";
  }};
  background: ${({ dateActive }) =>
    dateActive ? `#ea580c !important` : "transparent"};

  :hover {
    background: ${({ dateActive }) =>
      dateActive
        ? `#ea580c !important`
        : "#fef3c7"};
  }

  :disabled {
    color: #9ca3af;
    cursor: not-allowed;

    :hover {
      background-color: initial;
    }
  }
`;

export const MonthsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const MonthButton = styled.button<{ active?: boolean }>`
  ${ButtonStyle as any}

  width: calc(100% / 3) !important;
  height: 38px;
  min-height: 38px;
  padding: 0px;
  margin-bottom: 23px !important;

  font-size: 16px;

  border-radius: 18px;
  color: ${({ active }) => (active ? "#FFFFFF" : "#183028")};
  background: ${({ active }) => (active ? `#ea580c !important` : "white")};

  :hover {
    background: ${({ active }) =>
      active
        ? `#ea580c !important`
        : "#fef3c7"};
  }

  :disabled {
    cursor: not-allowed;
    color: #9ca3af;

    :hover {
      background: initial;
    }
  }
`;

export const InputWrapper = styled.div<{ active?: boolean }>`
  width: 100%;
  position: relative;

  > button {
    position: absolute;
    top: 12px;
    right: 16px;
  }
`;

const DisabledStyle = css`
  opacity: 1;
  border: none;
  background: #f3f4f6;
  cursor: not-allowed;

  border: none;
`;

export const WrapperInputContent = styled.div<{ disabled?: boolean }>`
  width: 100%;
  padding: 0px 16px;

  display: flex;
  align-items: center;

  ${({ disabled }) => (disabled ? DisabledStyle : "")};

  svg {
    path {
      fill: ${({ disabled }) =>
        disabled ? "#f97316" : "#ea580c"};
    }
  }
`;

export const InputMask = styled(ReactInputMask)`
  width: 100%;
  height: 50px;

  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  border-radius: 4px;
  color: ${({ disabled }) =>
    disabled ? "#9ca3af" : "#374151"};

  :hover {
    border-color: #f3bb90;
  }

  :focus {
    caret-color: #ea580c;
    border-color: #ea580c;
  }

  :disabled {
    ${DisabledStyle}
  }
`;

export const DatePickerAbsoluteWrapper = styled.div<{ show: boolean }>`
  padding-bottom: 20px;

  position: absolute;
  top: 100%;
  right: 0px;
  z-index: 2000;

  opacity: 0;

  ${({ show }) =>
    show ? FadeWithTransformStyled : FadeWithTransformReverseStyled};
  display: ${({ show }) => (show ? "block" : "none")};
`;

export const FieldSet = styled.fieldset<FieldSetProp>`
  max-width: 100%;
  padding: 0;
  margin: 0;
  border-radius: 4px;

  position: relative;
  transition: all 0.3s ease-in-out;
  border: 1px solid
    ${({ active, error }) =>
      error ? "#B30909" : active ? "#ea580c" : "#DBDFE1"};

  :hover {
    border: 1px solid
      ${({ active, disabled }) =>
        active
          ? "#ea580c"
          : disabled
          ? "#9ca3af"
          : "#9ca3af"};
  }

  span {
    color: ${({ disabled }) =>
      disabled ? "#9ca3af" : "#dc2626"};
  }
`;

export const ButtonIcon = styled.button`
  width: 30px !important;
  height: 30px;
  padding: 0px;
  outline: 0px;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  border: 0;
  border-radius: 4px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  :disabled {
    cursor: not-allowed;
  }
`;

const LabelCss = css`
  max-width: calc(100% - 52px);
  overflow: hidden;

  white-space: nowrap;
  text-overflow: ellipsis;

  span {
    position: absolute;
    top: 2px;
    right: 2px;
  }
`;

const LabelHaveValue = css<LabelProps>`
  top: -1px;
  left: 13px;

  font-size: 13px;
  color: ${({ $disabled }) =>
    $disabled ? "#9ca3af" : "#000000"};
  background: #ffffff;

  span {
    color: #dc2626;
  }

  ${LabelCss}
`;

const LabelFocus = css<LabelProps>`
  top: -1px;
  left: 13px;

  font-size: 13px;
  color: #ea580c;
  background: #ffffff;

  span {
    color: #dc2626;
  }

  ${LabelCss}
`;

const LabelNormal = css<LabelProps>`
  left: 15px;
  top: ${({ $type }) => ($type !== "textarea" ? "50%" : "24px")};

  font-size: 16px;
  color: #9ca3af;
`;

export const Label = styled.label<LabelProps>`
  height: 24px;
  padding-left: 3px;
  padding-right: 3px;

  position: absolute;
  z-index: 1;
  transform: translate(0, -50%);

  font-weight: 400;
  line-height: 24px;
  text-align: left;

  background-color: ${({ $disabled }) => ($disabled ? "transparent" : "")};
  transition: 0.2s;
  pointer-events: none;
  user-select: none;

  span {
    padding-left: 3px;
  }

  ${({ $haveValue, $focus }) =>
    $focus ? LabelFocus : $haveValue ? LabelHaveValue : LabelNormal}
  ${({ $required }) => ($required ? "padding-right: 10px;" : "")};
  ${({ $type }) => ($type !== "textarea" ? LabelCss : null)};
`;

export const WrapperHelpText = styled.div<{ disabled?: boolean }>`
  color: ${({ disabled }) =>
    disabled ? "#9ca3af" : "#9ca3af"};
  display: flex;
  justify-content: space-between;
  margin: 4px 16px 0px 16px;

  span {
    font-size: 12px;
  }
`;

export const HelpText = styled.span``;

export const TextCount = styled.span``;

export const CountNow = styled.span``;

export const MaxCount = styled.span``;

export const WrapperError = styled.div`
  display: flex;
  margin-top: 4px;
  align-items: center;

  svg {
    margin-right: 4px;
    flex-shrink: 0;
  }
`;

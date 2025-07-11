import { device } from "@/styles/media";
import ReactInputMask from "react-input-mask";
import styled, { css } from "styled-components";

export const FieldSetWrapper = styled.div<{ $mbMargin: number }>`
  width: 100%;

  @media ${device.mobile} {
    margin-top: ${({ $mbMargin }) => $mbMargin}px;
  }
`;

const ErrorStyle = css`
  border-color: #dc2626;
  :hover {
    border-color: #dc2626;
  }
`;

interface InputWrapperProps {
  $active?: boolean;
  $error?: boolean;
  hidden?: boolean;
  disabled?: boolean;
}

export const InputWrapper = styled.div<InputWrapperProps>`
  width: 100%;
  position: relative;
  border: ${({ hidden, $active }) =>
    hidden ? "none" : $active ? "1px solid #ea580c" : "1px solid #DBDFE1"};
  border-radius: 4px;
  padding: 0;
  margin: 0;
  ${({ $error }) => ($error ? ErrorStyle : "")}
  transition: all 0.2s ease-in-out;

  :hover {
    border: 1px solid
      ${({ $active, disabled }) =>
        $active
          ? "#ea580c"
          : disabled
          ? "#9ca3af"
          : "#9ca3af"};
  }
`;

export const InputLeft = styled.div`
  position: absolute;
  top: 14px;
  left: 8px;
`;

export const InputGroup = styled.div`
  width: 100%;
  position: relative;
`;

interface InputProps {
  $isuppercase?: boolean;
  size?: number;
}

const InputStyle = css<InputProps>`
  width: 100%;
  height: ${({ size }) => size || 48}px;

  padding: 12px 16px 12px 16px;
  display: block;

  font-size: 16px;
  line-height: 24px;
  font-weight: 400;

  overflow: hidden;
  text-overflow: ellipsis;

  border-radius: 4px;
  border: none; 
  outline: none; 

  text-transform: ${({ $isuppercase }) =>
    $isuppercase ? "capitalize" : "unset"};
  background: white;

  &:focus {
    outline: none;
    border: none;
    box-shadow: none;
  }

  &:focus-visible {
    outline: none;
    border: none;
  }

  :disabled {
    cursor: not-allowed;
    background: #f8f9f9;
    border: none;
    opacity: 1;
  }
  
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    appearance: none;
    margin: 0;
  }

  &[type="number"] {
    -moz-appearance: textfield;
    appearance: textfield;
  }
`;

export const Input = styled.input<InputProps>`
  ${InputStyle}
`;

export const TextArea = styled.textarea<InputProps>`
  ${InputStyle}
  height: 104px;
  min-height: 48px;
  min-width: 100%;
  resize: vertical;
`;

interface LabelProps {
  $focus?: boolean;
  $disabled?: boolean;
  $haveValue?: boolean;
  $type?: string;
  $required?: boolean;
}

const LabelCss = css`
  max-width: calc(100% - 52px);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  span {
    position: absolute;
    top: 0px;
    right: 2px;
  }
`;

const LabelNomal = css<LabelProps>`
  color: #9ca3af;
  top: ${({ $type }) => ($type !== "textarea" ? "50%" : "24px")};
  left: 15px;
  font-size: 16px;
`;

const FocusCSS = css`
  top: -1px;
  left: 13px;
  font-size: 13px;
  background: white;
  ::before {
    content: "";
    position: absolute;
    background-color: white;
    height: 1px;
    width: 100%;
    top: 12px;
    left: 0px;
    z-index: -1;
  }
`;

const LabelHaveValue = css<LabelProps>`
  color: #374151;
  ${FocusCSS}
  ${LabelCss}
`;

const LabelFocus = css<LabelProps>`
  color: #ea580c;
  ${FocusCSS}
  ${LabelCss}
`;

export const Label = styled.label<LabelProps>`
  position: absolute;
  font-style: normal;
  font-weight: normal;
  line-height: 24px;
  height: 24px;
  transform: translate(0, -50%);
  transition: 0.2s;
  text-align: left;
  pointer-events: none;
  padding-left: 3px;
  padding-right: 3px;
  user-select: none;
  background-color: ${({ $disabled }) => ($disabled ? "transparent" : "")};
  z-index: 1;

  span {
    padding-left: 3px;
    color: #dc2626;
  }

  ${({ $type }) => ($type !== "textarea" ? LabelCss : null)};
  ${({ $haveValue, $focus }) =>
    $focus ? LabelFocus : $haveValue ? LabelHaveValue : LabelNomal}
  ${({ $required }) => ($required ? "padding-right: 10px;" : "")};
`;

export const Error = styled.span`
  color: #dc2626;
  display: block;
  font-size: 12px;
`;

export const Warning = styled.span`
  color: #ea580c;
  display: inline-block;
  font-size: 12px;
`;

export const InputMask = styled(ReactInputMask)<any>`
  ${InputStyle}
`;

// : type === "mask" ? (
//   <InputMask
//     ref={refInput}
//     id={id}
//     name={name}
//     formatChars={{
//       A: "[A-Za-z0-9]",
//       9: "[0-9]",
//     }}
//     type="text"
//     maskChar={null}
//     mask={mask}
//     value={value}
//     onChange={onChange}
//     style={{ textTransform: "uppercase" }}
//     disabled={disabled}
//     onKeyDown={onKeyDown}
//     readOnly={disabled || readOnly}
//     maxLength={maxLength}
//     onInput={() => setAutoComplete(false)}
//   />
// )

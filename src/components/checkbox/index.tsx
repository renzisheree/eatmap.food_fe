import React, { ReactElement } from "react";
import Icons from "../icons";
import IconChecked from "./icons/checked";
import { CheckBoxWrapper, Label } from "./styled";

interface CheckBoxProps {
  lineMiddleSquare?: boolean;
  style?: any;
  label?: string | ReactElement;
  checked: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  error?: string;
  isTopCheckbox?: boolean;
  onChange?: () => void;
}

const CheckBox = ({
  lineMiddleSquare,
  style,
  label,
  checked,
  disabled,
  readOnly,
  isTopCheckbox = false,
  onChange,
}: CheckBoxProps) => {
  return (
    <CheckBoxWrapper
      style={style}
      lineMiddleSquare={lineMiddleSquare}
      checked={checked}
      disabled={disabled || readOnly}
      onClick={onChange}
      isTopCheckbox={isTopCheckbox}
    >
      {lineMiddleSquare ? <Icons icon="checked-line" /> : <IconChecked />}

      {label ? <Label>{label}</Label> : <Label noLabel></Label>}
    </CheckBoxWrapper>
  );
};

export default CheckBox;

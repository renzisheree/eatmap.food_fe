
import useClickAway from "@/hooks/use-click-away";
import { isEmpty } from "lodash";
import moment from "moment";
import { ChangeEvent, useCallback, useMemo, useRef, useState } from "react";
import { useTheme } from "styled-components";
import { Error, FieldSetWrapper } from "../input-fileldset/styled";
import IconCalendar from "./icons/calendar";
import IconError from "./icons/error-icon";
import DatePicker from "./picker";
import {
  ButtonIcon,
  DatePickerAbsoluteWrapper,
  FieldSet,
  InputMask,
  InputWrapper,
  Label,
  WrapperError,
  WrapperInputContent
} from "./styled";

interface InputProps {
  id?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  error?: string;
  showPickerDefault?: boolean;
  onKeyDown?: (e: any) => void;
  onBlur?: (date?: string) => void;
  onChange?: (date: string) => void;
  disableDate?: (date: Date) => boolean;
}

const DateInput = ({
  // id,
  name,
  value,
  placeholder,
  disabled,
  readOnly,
  required,
  error,
  showPickerDefault = false,
  onKeyDown,
  onBlur,
  onChange,
  disableDate,
}: InputProps) => {
  const [shownPicker, setShownPicker] = useState(showPickerDefault);
  const [focus, setFocus] = useState(false);

  const theme = useTheme();
  const ref = useRef<HTMLDivElement>(null);

  const place = placeholder || moment(new Date()).format("DD/MM/YYYY");

  useClickAway(ref, () => {
    if (!showPickerDefault) {
      setShownPicker(false);
      setFocus(false);
    }
  });

  const dateValue = useMemo(() => {
    return moment(value, "DD/MM/YYYY").toDate();
  }, [value]);

  const onSelectDate = (value: any) => {
    if (typeof onChange === "function") {
      onChange(value);
      onBlur?.(value);
    }
    if (!showPickerDefault) {
      setShownPicker(false);
    }
  };

  const changeDate = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    let num = value.replace(/[^0-9]/g, "") + "";
    let newStr = "";

    const max = Math.min(num.length, 8);

    for (let i = 0; i < max; i++) {
      newStr += num[i];
      if ((i === 1 || i === 3) && i !== max - 1) {
        newStr += "/";
      }
    }

    let [day, month, year] = newStr.split("/");
    const y = parseInt(year);
    const m = parseInt(month);

    if (parseInt(day) > 31) {
      day = "31";
    }

    if (day === "00") {
      day = "01";
    }

    if (month && parseInt(month) > 12) {
      month = "12";
    }

    if (month === "00") {
      month = "01";
    }

    if (year?.length === 4) {
      if (
        (y % 4 === 0 && y % 100 !== 0 && y % 400 !== 0) ||
        (y % 100 === 0 && y % 400 === 0)
      ) {
        if (month === "02" && parseInt(day) > 29) {
          day = "29";
        }
      } else if (month === "02" && parseInt(day) > 28) {
        day = "28";
      }
    }

    if ([4, 6, 9, 11].includes(m) && parseInt(day) > 30) {
      day = "30";
    }

    newStr = [day, month, year].join("/");
    onSelectDate(newStr);
  };

  const handleBlur = () => {
    setFocus(false);
    onBlur?.(value);
  };

  const handleFocus = () => {
    setFocus(true);
  };

  const handleOpenPicker = useCallback(() => {
    if (disabled) {
      return;
    }

    setShownPicker(true);
    setFocus(true);
  }, [disabled]);

  return (
    <FieldSetWrapper $mbMargin={placeholder ? 8 : 0}>
      <InputWrapper ref={ref}>
        <FieldSet disabled={disabled || false} active={focus} error={error || false}>
          <Label
            $focus={focus}
            $disabled={disabled}
            $required={required}
            $haveValue={!isEmpty(value)}
          >
            {place}
            {required && <span>*</span>}
          </Label>
          <WrapperInputContent disabled={disabled}>
            <InputMask
              name={name}
              onChange={!readOnly ? changeDate : undefined}
              onBlur={handleBlur}
              onFocus={handleFocus}
              value={value || ""}
              type="text"
              mask="99/99/9999"
              onKeyDown={onKeyDown}
              disabled={disabled}
            />
            <ButtonIcon disabled={disabled} onClick={handleOpenPicker}>
              <IconCalendar
                width={30}
                height={30}
                stroke={
                  disabled
                    ? theme.color.text.disabled
                    : theme.color.status.primary
                }
              />
            </ButtonIcon>
          </WrapperInputContent>
        </FieldSet>
        <DatePickerAbsoluteWrapper show={shownPicker}>
          <DatePicker
            value={dateValue}
            onChange={(date: Date) => {
              onSelectDate(moment(date).format("DD/MM/YYYY"));
            }}
            disableDate={disableDate}
          />
        </DatePickerAbsoluteWrapper>
      </InputWrapper>

      {error && (
        <WrapperError>
          <IconError />
          <Error>{error}</Error>
        </WrapperError>
      )}
    </FieldSetWrapper>
  );
};

export default DateInput;

import moment, { isDate } from "moment";
import { useCallback, useEffect, useState } from "react";
import IconArrowLeft from "./icons/arrow-left";
import IconArrowRight from "./icons/arrow-right";
import {
  ButtonIcon,
  DatePickerContent,
  DatePickerHeader,
  DatePickerWrapper,
  DayButton,
  DaysWrapper,
  HeaderButton,
  MonthButton,
  MonthsWrapper,
  WeekTitleWrapper,
  WeekWrapper,
} from "./styled";

const weekTitle = ["Mon", "Tue", "Wen", "Thu", "Fri", "Sat", "Sun"];

const WeekRender = ({
  date,
  month,
  value,
  onChange,
  disableDate,
}: {
  date: Date;
  month: number;
  value?: Date;
  onChange: (date: Date) => void;
  disableDate: (date: Date) => boolean;
}) => {
  const monday = moment(date).startOf("isoWeek");
  const week = [monday.toDate()];
  const today = moment().toDate();

  for (var i = 0; i < 6; i++) {
    week.push(monday.add(1, "day").toDate());
  }

  return (
    <WeekWrapper>
      {week.map((date) => (
        <DayButton
          key={date.toJSON()}
          currentMonth={date.getMonth() === month}
          dateActive={value?.getTime() === date.getTime()}
          disabled={
            disableDate ? disableDate(date) : today.getTime() < date.getTime()
          }
          onClick={() => onChange(date)}
        >
          {date.getDate()}
        </DayButton>
      ))}
    </WeekWrapper>
  );
};

const MonthRender = ({
  year,
  month,
  onChange,
  value,
  disableDate,
}: {
  year: number;
  month: number;
  onChange: (date: Date) => void;
  disableDate?: (date: Date) => boolean;

  value?: Date;
}) => {
  const date = moment([year, month]);
  const weeks = [];

  while (
    date.get("month") === month ||
    date.startOf("isoWeek").get("month") === month
  ) {
    weeks.push(
      <WeekRender
        value={value}
        key={date.startOf("isoWeek").format()}
        date={date.toDate()}
        month={month}
        onChange={onChange}
              disableDate={disableDate || (() => false)}
      />
    );
    date.add(7, "day");
  }

  return <>{weeks}</>;
};

const DatePicker = ({
  value,
  onChange,
  disableDate,
}: {
  value: Date;
  onChange: (date: Date) => void;
  disableDate?: (date: Date) => boolean;
}) => {
  const today = isDate(value) && moment(value).isValid() ? value : new Date();

  const [picker, setPicker] = useState("day");
  const [month, setMonth] = useState(today.getMonth());
  const [year, setYear] = useState(today.getFullYear());

  const handleChange = useCallback(
    (date: Date) => {
      onChange(date);
      setMonth(date.getMonth());
      setYear(date.getFullYear());
    },
    [month, year, onChange]
  );

  useEffect(() => {
    const date = isDate(value) && moment(value).isValid() ? value : new Date();

    setMonth(date.getMonth());
    setYear(date.getFullYear());
  }, [value]);

  return (
    <DatePickerWrapper>
      <DatePickerContent>
        <DatePickerHeader>
          <ButtonIcon
            onClick={() => {
              if (picker === "day") {
                let date = moment([year, month]).subtract(1, "month");
                setYear(date.get("year"));
                setMonth(date.get("month"));
              } else {
                setYear(year - 1);
              }
            }}
          >
            <IconArrowLeft />
          </ButtonIcon>
          <HeaderButton
            onClick={() => {
              setPicker((pre) => (pre === "day" ? "month" : "day"));
            }}
          >
            <h6>
              {picker === "day" ? `Tháng ${month + 1} năm ${year}` : year}
            </h6>
          </HeaderButton>
          <ButtonIcon
            onClick={() => {
              if (picker === "day") {
                let date = moment([year, month]).add(1, "month");
                setYear(date.get("year"));
                setMonth(date.get("month"));
              } else {
                setYear(year + 1);
              }
            }}
          >
            <IconArrowRight />
          </ButtonIcon>
        </DatePickerHeader>
        {picker === "day" ? (
          <DaysWrapper>
            <WeekTitleWrapper>
              {weekTitle.map((e, index) => (
                <p key={index}>{e}</p>
              ))}
            </WeekTitleWrapper>
            <MonthRender
              year={year}
              month={month}
              value={value}
              onChange={handleChange}
              disableDate={disableDate || (() => false)}
            />
          </DaysWrapper>
        ) : (
          <MonthsWrapper>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((m) => (
              <MonthButton
                key={m}
                active={month === m}
                onClick={() => {
                  setMonth(m);
                  setPicker("day");
                }}
              >
                {`Tháng ${m + 1}`}
              </MonthButton>
            ))}
          </MonthsWrapper>
        )}
      </DatePickerContent>
    </DatePickerWrapper>
  );
};

export default DatePicker;

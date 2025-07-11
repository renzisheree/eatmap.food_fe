import { IconProps } from "..";
import React from "react";

const CheckListDone = ({ size = 24, color = "#03824F" }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="12"
        cy="12.5"
        r="10"
        fill={color}
        stroke={color}
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.98081 16.5L6.27734 12.7091L6.50064 12.5C6.8708 12.1536 7.47058 12.1536 7.84043 12.5L9.98081 14.8266L16.4583 8.7598C16.8282 8.4134 17.4283 8.4134 17.7981 8.7598L18.0214 8.96923L9.98081 16.5Z"
        fill="#F8F9F9"
        stroke="#F8F9F9"
      />
    </svg>
  );
};

export default CheckListDone;

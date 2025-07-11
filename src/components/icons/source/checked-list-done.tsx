import { IconProps } from "..";
import React from "react";

const CheckedListDone = ({ size = 18, color = "#6ECEB2" }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="9"
        cy="9"
        r="7.25"
        fill="#F1FAF7"
        stroke={color}
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.48463 12L4.70703 9.15685L4.8745 9C5.15213 8.7402 5.60196 8.7402 5.87934 9L7.48463 10.7449L12.3428 6.19485C12.6202 5.93505 13.0702 5.93505 13.3476 6.19485L13.5151 6.35192L7.48463 12Z"
        fill={color}
        stroke={color}
      />
    </svg>
  );
};

export default CheckedListDone;

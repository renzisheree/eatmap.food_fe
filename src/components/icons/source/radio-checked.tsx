import { IconProps } from "..";
import React from "react";

const RadioChecked = ({ size = 18, color = "#ea580c" }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_303_15207)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.25 9C17.25 13.5563 13.5563 17.25 9 17.25C4.44365 17.25 0.75 13.5563 0.75 9C0.75 4.44365 4.44365 0.75 9 0.75C13.5563 0.75 17.25 4.44365 17.25 9ZM14.25 9C14.25 11.8995 11.8995 14.25 9 14.25C6.1005 14.25 3.75 11.8995 3.75 9C3.75 6.1005 6.1005 3.75 9 3.75C11.8995 3.75 14.25 6.1005 14.25 9Z"
          fill={color}
        />
        <path
          d="M11.25 9C11.25 10.2426 10.2426 11.25 9 11.25C7.75736 11.25 6.75 10.2426 6.75 9C6.75 7.75736 7.75736 6.75 9 6.75C10.2426 6.75 11.25 7.75736 11.25 9Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_303_15207">
          <rect width={18} height={18} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default RadioChecked;

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
      <g clipPath="url(#clip0_303_15224)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9 15.75C12.7279 15.75 15.75 12.7279 15.75 9C15.75 5.27208 12.7279 2.25 9 2.25C5.27208 2.25 2.25 5.27208 2.25 9C2.25 12.7279 5.27208 15.75 9 15.75ZM9 17.25C13.5563 17.25 17.25 13.5563 17.25 9C17.25 4.44365 13.5563 0.75 9 0.75C4.44365 0.75 0.75 4.44365 0.75 9C0.75 13.5563 4.44365 17.25 9 17.25Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_303_15224">
          <rect width={18} height={18} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default RadioChecked;

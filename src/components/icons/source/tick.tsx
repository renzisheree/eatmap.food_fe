import { IconProps } from "..";
import React from "react";

const Tick = ({ size = 16, color = "#ea580c" }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1488_1434)">
        <path
          d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
          fill={color}
        />
        <path
          d="M6.71715 11.2155L4.11715 8.60058C3.96095 8.44348 3.96095 8.18876 4.11715 8.03164L4.68282 7.4627C4.83903 7.30558 5.09231 7.30558 5.24851 7.4627L7 9.22424L10.7515 5.4512C10.9077 5.2941 11.161 5.2941 11.3172 5.4512L11.8828 6.02014C12.0391 6.17724 12.0391 6.43196 11.8828 6.58908L7.28284 11.2155C7.12662 11.3727 6.87336 11.3727 6.71715 11.2155Z"
          fill="#F8F9F9"
        />
      </g>
      <defs>
        <clipPath id="clip0_1488_1434">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Tick;

import { IconProps } from "..";
import React from "react";

const IconUserCircle = ({ size = 36, color = "#ea580c" }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2700_7099)">
        <circle cx="18" cy="18" r="18" fill={color} />
        <path
          d="M18 18C15.245 18 13 15.755 13 13C13 10.245 15.245 8 18 8C20.755 8 23 10.245 23 13C23 15.755 20.755 18 18 18ZM18 10C16.345 10 15 11.345 15 13C15 14.655 16.345 16 18 16C19.655 16 21 14.655 21 13C21 11.345 19.655 10 18 10Z"
          fill="white"
        />
        <path
          d="M25.5 27H25V24.875C25 22.735 23.265 21 21.125 21H14.875C12.735 21 11 22.735 11 24.875V27H10.5C9.67 27 9 26.33 9 25.5V24.875C9 21.63 11.63 19 14.875 19H21.125C24.37 19 27 21.63 27 24.875V25.5C27 26.33 26.33 27 25.5 27Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_2700_7099">
          <rect width="36" height="36" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default IconUserCircle;

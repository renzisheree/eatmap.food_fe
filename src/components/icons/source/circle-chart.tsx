import { IconProps } from "..";
import React from "react";

const IconCircleChart = ({ size = 36 }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1500_16021)">
        <circle cx="18" cy="18" r="18" fill="#ea580c" />
        <g clipPath="url(#clip1_1500_16021)">
          <path
            d="M25 9H11C9.9 9 9 9.9 9 11V25C9 26.1 9.9 27 11 27H25C26.1 27 27 26.1 27 25V11C27 9.9 26.1 9 25 9ZM25 25H11V11H25V25ZM13 16H15V23H13V16ZM17 13H19V23H17V13ZM21 19H23V23H21V19Z"
            fill="white"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_1500_16021">
          <rect width="36" height="36" fill="white" />
        </clipPath>
        <clipPath id="clip1_1500_16021">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(6 6)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default IconCircleChart;

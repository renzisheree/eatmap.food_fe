import { IconProps } from "..";
import React from "react";

const IconInformation = ({ size = 24, color = "#ea580c" }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1446_6373)">
        <path
          d="M13 10H12C11.725 10 11.5 10.225 11.5 10.5V17.5C11.5 17.775 11.725 18 12 18H13C13.275 18 13.5 17.775 13.5 17.5V10.5C13.5 10.225 13.275 10 13 10Z"
          fill={color}
        />
        <path
          d="M22.451 10.9751C21.981 6.30011 18.201 2.52011 13.526 2.05011C7.21105 1.42011 1.92105 6.70511 2.55105 13.0251C3.01605 17.7001 6.80105 21.4851 11.476 21.9501C17.791 22.5801 23.081 17.2901 22.451 10.9751ZM20.436 13.0401C19.986 16.6001 17.106 19.4801 13.546 19.9301C8.31605 20.6001 3.90105 16.1851 4.56605 10.9551C5.02105 7.39511 7.89605 4.51511 11.456 4.06511C16.686 3.40011 21.101 7.81511 20.436 13.0401Z"
          fill={color}
        />
        <path
          d="M13 6H12C11.725 6 11.5 6.225 11.5 6.5V7.5C11.5 7.775 11.725 8 12 8H13C13.275 8 13.5 7.775 13.5 7.5V6.5C13.5 6.225 13.275 6 13 6Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_1446_6373">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default IconInformation;

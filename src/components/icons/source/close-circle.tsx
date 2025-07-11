import { IconProps } from "..";
import React from "react";

const IconCloseCircle = ({ size = 16, color = "#183028" }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.00033 15.3337C12.0504 15.3337 15.3337 12.0504 15.3337 8.00033C15.3337 3.95024 12.0504 0.666992 8.00033 0.666992C3.95024 0.666992 0.666992 3.95024 0.666992 8.00033C0.666992 12.0504 3.95024 15.3337 8.00033 15.3337Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.4239 5.55684L8.99839 7.98234L11.4239 10.4078L11.1647 10.6671C10.7353 11.0964 10.0386 11.0964 9.60925 10.6671L7.96145 9.01928L6.31365 10.6671C5.88429 11.0964 5.18762 11.0964 4.75825 10.6671L4.49902 10.4078L6.92452 7.98234L4.49902 5.55684L4.75825 5.29761C5.18762 4.86824 5.88429 4.86824 6.31365 5.29761L7.96145 6.94541L9.60925 5.29761C10.0386 4.86824 10.7353 4.86824 11.1647 5.29761L11.4239 5.55684Z"
        fill="white"
      />
    </svg>
  );
};

export default IconCloseCircle;

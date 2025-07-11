import { IconProps } from "..";
import React from "react";

const CheckedLine = ({ size = 24, color = "#ea580c" }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.63636 2C3.62806 2 2 3.62806 2 5.63636V18.3636C2 20.3719 3.62806 22 5.63636 22H18.3636C20.3719 22 22 20.3719 22 18.3636V5.63636C22 3.62806 20.3719 2 18.3636 2H5.63636Z"
          fill={color}
        />
        <rect x={6} y={11} width={12} height={2} rx={1} fill="white" />
      </svg>
    </svg>
  );
};

export default CheckedLine;

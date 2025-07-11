import { IconProps } from "../";
import React from "react";

const SpanDown = ({ size = 16, color = "#ea580c" }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.74743 11.6592C8.34964 12.1067 7.6504 12.1067 7.25261 11.6592L1.47944 5.16437C0.906194 4.51947 1.364 3.5 2.22685 3.5L13.7732 3.5C14.636 3.5 15.0938 4.51946 14.5206 5.16436L8.74743 11.6592Z"
        fill={color}
      />
    </svg>
  );
};

export default SpanDown;

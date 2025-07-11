import { IconProps } from "..";
import React from "react";

const IconCopyCode = ({ size = 24, color = "#ea580c" }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.5 21H19.5C20.35 21 21 20.35 21 19.5V7.5C21 6.65 20.35 6 19.5 6L7.5 6C6.65 6 6 6.65 6 7.5L6 19.5C6 20.3 6.65 21 7.5 21ZM8 8L19 8V19H8L8 8ZM3 4.5L3 16.5C3 17.35 3.65 18 4.5 18L5 18L5 5L18 5L18 4.5C18 3.65 17.35 3 16.5 3L4.5 3C3.65 3 3 3.65 3 4.5Z"
        fill={color}
      />
    </svg>
  );
};

export default IconCopyCode;

import React from "react";
import { IconProps } from "..";

const ChevronDown = ({ size = 24, color = "#ea580c" }: IconProps) => {
  return (
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
        d="M4.49516 7.54991C3.83495 8.24705 3.83495 9.37888 4.49516 10.076L11.9994 18L19.5036 10.076C20.1636 9.37914 20.1636 8.24858 19.5148 7.55155L18.9924 7L12.0042 14.3791L5.01597 7L4.49516 7.54991Z"
        fill={color}
      />
    </svg>
  );
};

export default ChevronDown;

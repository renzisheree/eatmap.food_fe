import { IconProps } from "../";
import React from "react";

const IconMenu = ({ size = 24, color = "#fff" }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 6.5V5.5C2 5.2 2.2 5 2.5 5H17.5C17.8 5 18 5.2 18 5.5V6.5C18 6.8 17.8 7 17.5 7H2.5C2.25 7 2 6.8 2 6.5ZM21.5 11H2.5C2.2 11 2 11.2 2 11.5V12.5C2 12.8 2.2 13 2.5 13H21.5C21.8 13 22 12.8 22 12.5V11.5C22 11.25 21.8 11 21.5 11ZM2 17.5V18.5C2 18.8 2.2 19 2.5 19H12.5C13.35 19 14 18.35 14 17.5V17H2.5C2.25 17 2 17.25 2 17.5Z"
        fill={color}
      />
    </svg>
  );
};

export default IconMenu;

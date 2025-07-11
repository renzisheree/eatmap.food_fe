import { IconProps } from "..";
import React from "react";

const IconUser = ({ size = 24, color = "#FFFFFF" }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 12C9.245 12 7 9.755 7 7C7 4.245 9.245 2 12 2C14.755 2 17 4.245 17 7C17 9.755 14.755 12 12 12ZM12 4C10.345 4 9 5.345 9 7C9 8.655 10.345 10 12 10C13.655 10 15 8.655 15 7C15 5.345 13.655 4 12 4Z"
        fill={color}
      />
      <path
        d="M19.5 21H19V18.875C19 16.735 17.265 15 15.125 15H8.875C6.735 15 5 16.735 5 18.875V21H4.5C3.67 21 3 20.33 3 19.5V18.875C3 15.63 5.63 13 8.875 13H15.125C18.37 13 21 15.63 21 18.875V19.5C21 20.33 20.33 21 19.5 21Z"
        fill={color}
      />
    </svg>
  );
};

export default IconUser;

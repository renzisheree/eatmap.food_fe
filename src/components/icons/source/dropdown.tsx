import { IconProps } from "../";
import React from "react";

const IconDropdown = ({ size = 24, color = "#183028" }: IconProps) => {
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
        d="M4.52842 7.08084L8.05708 3.5525L11.5857 7.08084L11.8214 6.84517C12.2117 6.45484 12.2117 5.8215 11.8214 5.43117L8.05708 1.6665L4.29275 5.43117C3.90242 5.8215 3.90242 6.45484 4.29275 6.84517L4.52842 7.08084ZM11.8214 9.0405C12.2117 9.43084 12.2117 10.0642 11.8214 10.4548L8.05708 14.2192L4.29275 10.4548C3.90242 10.0642 3.90242 9.43084 4.29275 9.0405L4.52842 8.80484L8.05708 12.3332L11.5857 8.80484L11.8214 9.0405Z"
        fill={color}
      />
    </svg>
  );
};

export default IconDropdown;

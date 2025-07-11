import { IconProps } from "..";
import React from "react";

const CheckListError = ({ size = 18, color = "#B30909" }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="7.99935"
        cy="8"
        r="6.33333"
        fill="#FEF3F3"
        stroke={color}
        strokeWidth="2"
      />
      <path
        d="M4.33268 10.9601L4.50162 11.127C4.78001 11.4021 5.2321 11.4021 5.51049 11.127L7.99935 8.66537L10.4882 11.1247C10.7666 11.3997 11.2187 11.3997 11.4971 11.1247L11.666 10.9577L8.67272 7.99999L11.666 5.03991L11.4971 4.87297C11.2187 4.59789 10.7666 4.59789 10.4882 4.87297L7.99935 7.33462L5.51049 4.87533C5.2321 4.60024 4.78001 4.60024 4.50162 4.87533L4.33268 5.04226L7.32598 7.99999L4.33268 10.9601Z"
        fill={color}
        stroke={color}
      />
    </svg>
  );
};

export default CheckListError;

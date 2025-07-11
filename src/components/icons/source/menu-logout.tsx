import { IconProps } from "..";
import React from "react";

const IconMenuLogout = ({ size = 24, color = "#183028" }: IconProps) => {
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
        d="M13.707 4.5L13.3535 4.8535C12.768 5.439 12.768 6.389 13.3535 6.9745L17.586 11.207H7.5V13.207H17.5855L13.3535 17.4395C12.768 18.025 12.768 18.975 13.3535 19.5605L13.707 19.914L21.4145 12.2065L13.707 4.5ZM8.5 19H5V5H8.5C9.3285 5 10 4.3285 10 3.5V3H3V21H10V20.5C10 19.6715 9.3285 19 8.5 19Z"
        fill={color}
      />
    </svg>
  );
};

export default IconMenuLogout;

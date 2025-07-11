import React from "react";
import { IconProps } from "..";

const DownloadBold = ({ size = 24, color = "#ea580c" }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19 9H15V3H9V9H5L12 16L19 9ZM5 18V20H19V18H5Z" fill={color} />
    </svg>
  );
};

export default DownloadBold;

import { IconProps } from "..";
import React from "react";

export default function CheckCircleProcess({
  size = 20,
  color = "#ea580c",
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="10.4987"
        cy="9.9987"
        r="8.16667"
        fill="white"
        stroke={color}
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.81669 13.3346L5.73047 10.1756L5.91655 10.0013C6.22502 9.71264 6.72483 9.71264 7.03304 10.0013L8.81669 11.9401L14.2146 6.88447C14.5228 6.5958 15.0229 6.5958 15.3311 6.88447L15.5172 7.05899L8.81669 13.3346Z"
        fill="#FAE4D3"
        stroke="#FAE4D3"
      />
    </svg>
  );
}

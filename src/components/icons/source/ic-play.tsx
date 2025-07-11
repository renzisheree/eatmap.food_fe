import { IconProps } from "../";
import React from "react";

const IconPlay = ({ size = 60, color = "white" }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle opacity="0.3" cx="30" cy="30" r="30" fill="white" />
      <circle cx="30" cy="30" r="15" fill="#ea580c" />
      <path
        d="M30 6C16.74 6 6 16.74 6 30C6 43.26 16.74 54 30 54C43.26 54 54 43.26 54 30C54 16.74 43.26 6 30 6ZM28.4 38.4C27.0815 39.3889 25.2 38.4481 25.2 36.8V23.2C25.2 21.5519 27.0815 20.6111 28.4 21.6L37.4667 28.4C38.5333 29.2 38.5333 30.8 37.4667 31.6L28.4 38.4Z"
        fill={color}
      />
    </svg>
  );
};

export default IconPlay;

import { IconProps } from "../";
import React from "react";

const SpanDown = ({ size = 24, color = "#ea580c" }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 3C6.15 3 3 6.15 3 10C3 13.85 6.15 17 10 17C13.85 17 17 13.85 17 10C17 6.15 13.85 3 10 3ZM10 15C7.25 15 5 12.75 5 10C5 7.25 7.25 5 10 5C12.75 5 15 7.25 15 10C15 12.75 12.75 15 10 15Z"
        fill={color}
      />
      <path
        d="M20.3484 18.9508L16.6984 15.3008L16.3484 15.6508C15.7484 16.2508 15.7484 17.2008 16.3484 17.7508L18.9484 20.3508C19.1484 20.5508 19.4484 20.5508 19.6484 20.3508L20.3484 19.6508C20.5484 19.4508 20.5484 19.1508 20.3484 18.9508Z"
        fill={color}
      />
    </svg>
  );
};

export default SpanDown;

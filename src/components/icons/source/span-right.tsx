import { IconProps } from "../";
import React from "react";

const SpanRight = ({ size = 16, color = "#ea580c" }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.1592 7.25257C12.6067 7.65036 12.6067 8.3496 12.1592 8.74739L5.66437 14.5206C5.01947 15.0938 4 14.636 4 13.7732L4 2.22684C4 1.36399 5.01946 0.906186 5.66436 1.47943L12.1592 7.25257Z"
        fill={color}
      />
    </svg>
  );
};

export default SpanRight;

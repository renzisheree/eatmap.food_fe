import { IconProps } from "..";
import React from "react";

const IconIdCard = ({ size = 24, color = "#ea580c" }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.5 21h-15c-.85 0-1.5-.65-1.5-1.5v-15C3 3.65 3.65 3 4.5 3h15c.85 0 1.5.65 1.5 1.5v15c0 .85-.65 1.5-1.5 1.5zM5 19h14V5H5v14z"
        fill={color}
      />
      <path
        d="M12 12c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.3 3-3 3zm0-4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zM17 17c-.2 0-.45-.05-.65-.2-4.8-3.85-8.5-.25-8.65-.1-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4 1.75-1.8 6.35-4.1 11.35-.1.45.35.5 1 .15 1.4-.2.3-.5.4-.8.4z"
        fill={color}
      />
      <path
        d="M17.5 18h-11c-.3 0-.5-.2-.5-.5V16h12v1.5c0 .3-.2.5-.5.5z"
        fill={color}
      />
    </svg>
  );
};

export default IconIdCard;

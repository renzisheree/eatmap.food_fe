import React from "react";
import { IconProps } from "..";

const IconEmailCircle = ({ size = 44, color = "#ea580c" }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_924_13351)">
        <circle cx="22" cy="22" r="22" fill="white" />
        <path
          d="M31.4136 14.3242H12.688C11.7671 14.3242 11.0508 15.0405 11.0508 15.9614V28.0358C11.0508 28.9568 11.7671 29.6731 12.688 29.6731H31.4136C32.3345 29.6731 33.0508 28.9568 33.0508 28.0358V15.9614C33.0508 15.0405 32.2322 14.3242 31.4136 14.3242ZM29.1624 16.4731L21.9996 21.8963L14.8368 16.4731H29.1624ZM30.7996 27.5242H13.1996V18.0079L20.9764 23.9428C21.5903 24.3521 22.4089 24.3521 23.0229 23.9428L30.7996 18.0079V27.5242Z"
          fill={color}
        />
      </g>

      <defs>
        <clipPath id="clip0_924_13340">
          <rect width="44" height="44" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default IconEmailCircle;

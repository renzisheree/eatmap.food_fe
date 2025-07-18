import React from "react";
import { IconProps } from "../";

const IconMap = ({ size = 24, color = "#ea580c" }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 20.9446V6.58445C3 5.98611 3.34903 5.43764 3.94737 5.18833L8.78393 3.24373C8.88366 3.19387 9.03324 3.19387 9.13296 3.24373L14.9668 5.18833L20.3019 3.04429C20.651 2.8947 21 3.14401 21 3.49304V17.8532C21 18.4515 20.651 19 20.0526 19.2493L15.2161 21.1939C15.1163 21.2437 14.9668 21.2437 14.867 21.1939L9.03324 19.2991L3.69806 21.4432C3.39889 21.5429 3 21.2936 3 20.9446ZM8.98338 17.1551L14.9668 19.1495L19.0055 17.554V5.73681L15.0166 7.33237L9.03324 5.33791L4.99446 6.93348V18.7507L8.98338 17.1551Z"
        fill={color}
      />
      <path
        d="M9.98274 4.24121H7.98828V18.2024H9.98274V4.24121Z"
        fill={color}
      />
      <path
        d="M15.9632 6.23535H13.9688V20.1966H15.9632V6.23535Z"
        fill={color}
      />
    </svg>
  );
};

export default IconMap;

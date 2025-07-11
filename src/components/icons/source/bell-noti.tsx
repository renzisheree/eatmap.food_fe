import { IconProps } from "..";
import React from "react";

const IconBellNoti = ({ size = 24, color = "#ea580c" }: IconProps) => {
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
        d="M9.00027 20.3333C9.00027 21.2539 9.74638 22 10.6669 22H14.0003C14.9208 22 15.6669 21.2539 15.6669 20.3333V19.7778H9.00027V20.3333ZM20.2693 15.9767L18.6082 13.8406V7.92556C18.6082 4.65833 15.7838 2 12.3121 2C8.83986 2 6.01542 4.65833 6.01542 7.92556V13.8406L4.35431 15.9767C3.50264 17.0717 4.28264 18.6667 5.66986 18.6667H18.9538C20.3404 18.6667 21.121 17.0717 20.2693 15.9767ZM6.77805 16.4444L8.20972 14.6039V7.92556C8.20972 5.88333 10.0375 4.22222 12.2842 4.22222C14.5303 4.22222 16.358 5.88333 16.358 7.92556V14.6039L17.7897 16.4444H6.77805Z"
        fill={color}
      />
      <circle cx="17" cy="7" r="5" fill="#B30909" stroke="white" />
    </svg>
  );
};

export default IconBellNoti;

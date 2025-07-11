import React from "react";

const DeleteCircle = ({ size = 36, color = "#ea580c" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="18"
        cy="18"
        r="17"
        fill="white"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15.186 9.5625V10.5H10.4985V12.375H11.436V24.5625C11.436 25.0598 11.6336 25.5367 11.9852 25.8883C12.3368 26.24 12.8138 26.4375 13.311 26.4375H22.686C23.1833 26.4375 23.6602 26.24 24.0119 25.8883C24.3635 25.5367 24.561 25.0598 24.561 24.5625V12.375H25.4985V10.5H20.811V9.5625H15.186ZM13.311 12.375H22.686V24.5625H13.311V12.375ZM15.186 14.25V22.6875H17.061V14.25H15.186ZM18.936 14.25V22.6875H20.811V14.25H18.936Z"
        fill={color}
      />
    </svg>
  );
};

export default DeleteCircle;

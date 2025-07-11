import React from "react";

const IconPlusCircle = ({ width = 20, height = 20, color = "#ea580c" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="10" cy="10" r="10" fill={color} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.625 9.375V5.9375C10.625 5.41969 10.2053 5 9.6875 5H9.375V9.375H5.9375C5.41969 9.375 5 9.79469 5 10.3125V10.625H9.375V14.0625C9.375 14.5803 9.79469 15 10.3125 15H10.625V10.625H14.0625C14.5803 10.625 15 10.2053 15 9.6875V9.375H10.625Z"
        fill="white"
      />
    </svg>
  );
};

export default IconPlusCircle;

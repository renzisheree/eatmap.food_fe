import React from "react";

const PlusIcon = ({ size = 24, color = "#ea580c" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill={color} />
    </svg>
  );
};

export default PlusIcon;

import React from "react";

const ArrowLeft = ({ size = 24, color = "#ea580c" }) => {
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
        d="M11.7671 4.43913L12.1211 4.79263L5.82856 11.0846H20.4141V13.0846H5.82756L12.1206 19.3781L11.7671 19.7311C11.1816 20.3171 10.2316 20.3171 9.64556 19.7311L2.00006 12.0851L9.64606 4.43913C10.2316 3.85362 11.1816 3.85362 11.7671 4.43913Z"
        fill={color}
      />
    </svg>
  );
};

export default ArrowLeft;

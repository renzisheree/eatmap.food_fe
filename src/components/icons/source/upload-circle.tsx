import React from "react";

const UploadCircle = ({ size = 36, color = "#ea580c" }) => {
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
        cy="18.5"
        r="17"
        fill="white"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.6117 15.6377C24.1151 16.1502 24.1151 16.9616 23.6117 17.4313L23.318 17.7303L18.8288 13.2463V24.0078H17.1506V13.2463L12.7033 17.773L12.4096 17.474C11.9061 16.9616 11.9061 16.1502 12.4096 15.6804L17.9897 9.95805L23.6117 15.6377Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.1669 22.3435L24.1669 25.3328L12.2096 25.3328L12.2096 22.3435C12.2096 21.6359 11.6361 21.0624 10.9285 21.0624L10.5015 21.0624L10.5015 27.041L25.8751 27.041L25.8751 21.0624L25.448 21.0624C24.7404 21.0624 24.1669 21.6359 24.1669 22.3435Z"
        fill={color}
      />
    </svg>
  );
};

export default UploadCircle;

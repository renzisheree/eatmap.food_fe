import { IconProps } from "..";
import React from "react";

const IconDocumentCertificate = ({
  size = 24,
  color = "#ea580c",
}: IconProps) => {
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
        d="M13 13H9.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h2a1.5 1.5 0 001.5-1.5V13zM9.5 9a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h5a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-5zm5.005-5.5a1.5 1.5 0 00-1.5-1.5H4a1.5 1.5 0 00-1.5 1.5v13A1.5 1.5 0 004 18h.5V4h10.005v-.5zM12.497 20h-5V7H16.5v4.5A1.5 1.5 0 0018 13h.5V6.5A1.5 1.5 0 0017 5H6.996a1.5 1.5 0 00-1.5 1.5v14a1.5 1.5 0 001.5 1.5h4a1.5 1.5 0 001.5-1.5V20zm9.007-5.028l-5.707 5.707-2.707-2.707.353-.354a1.5 1.5 0 012.121 0l.233.233 3.232-3.232a1.5 1.5 0 012.122 0l.353.353z"
        fill={color}
      />
    </svg>
  );
};

export default IconDocumentCertificate;

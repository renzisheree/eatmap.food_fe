import { IconProps } from "..";
import React from "react";

const IconRefresh = ({ size = 24, color = "#ea580c" }: IconProps) => {
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
        d="M16.9946 12H21.5001V7.501C21.5001 6.6725 20.8286 6.001 20.0001 6.001H19.5001V8.6565C18.5751 6.378 16.0806 3.5 11.5001 3.5C6.43012 3.5 2.38212 7.9625 3.07812 13.166C3.53762 16.599 6.11762 19.456 9.48612 20.2605C13.8841 21.3115 18.1436 18.794 19.5326 14.786C19.6291 14.5095 19.4791 14.207 19.1961 14.129L18.2306 13.8625C17.9826 13.794 17.7166 13.9225 17.6311 14.165C16.5571 17.21 13.3121 19.117 9.96012 18.3175C7.40262 17.707 5.43362 15.5435 5.06662 12.94C4.50262 8.9405 7.60712 5.5 11.5001 5.5C15.6616 5.5 17.4631 8.559 17.8446 10H15.4946V10.5C15.4946 11.3285 16.1661 12 16.9946 12Z"
        fill={color}
      />
    </svg>
  );
};

export default IconRefresh;

import React from "react";

const IconRequestManage = ({ size = 24, color = "#ea580c" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.9991 21.0001H2.99907C2.71486 21.0001 2.52539 20.8106 2.52539 20.5264V8.2106C2.52539 7.40534 3.14118 6.78955 3.94644 6.78955H20.0517C20.857 6.78955 21.4728 7.40534 21.4728 8.2106V20.5264C21.4728 20.8106 21.2833 21.0001 20.9991 21.0001ZM4.42013 19.1053H19.578V8.68429H4.42013V19.1053Z"
        fill={color}
      />
      <path
        d="M16.7383 10.5789H14.8436V4.89474H9.15939V10.5789H7.26465V4.42105C7.26465 3.61579 7.88044 3 8.6857 3H15.3173C16.1225 3 16.7383 3.61579 16.7383 4.42105V10.5789Z"
        fill={color}
      />
      <path
        d="M20.5272 15.3154H3.47461V17.2102H20.5272V15.3154Z"
        fill={color}
      />
    </svg>
  );
};

export default IconRequestManage;

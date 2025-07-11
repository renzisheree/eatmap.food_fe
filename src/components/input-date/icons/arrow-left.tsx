import { IconProperty } from "@/@custom-types";
import React from "react";

const IconArrowLeft = ({
  width = 24,
  height = 24,
  fill = "#ea580c",
}: IconProperty) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.8003 6.05983C15.2933 5.55282 14.4701 5.55282 13.9631 6.05983L8.2002 11.8227L13.9631 17.5856C14.4699 18.0924 15.2921 18.0924 15.7991 17.5942L16.2002 17.193L10.8336 11.8264L16.2002 6.45979L15.8003 6.05983Z"
        fill={fill}
      />
    </svg>
  );
};

export default IconArrowLeft;

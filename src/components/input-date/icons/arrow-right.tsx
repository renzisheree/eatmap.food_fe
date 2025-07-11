import { IconProperty } from "@/@custom-types";
import React from "react";

const IconArrowRight = ({
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
        d="M8.60013 17.5867C9.10714 18.0937 9.93029 18.0937 10.4373 17.5867L16.2002 11.8238L10.4373 6.06087C9.93048 5.55405 9.10825 5.55407 8.60132 6.05232L8.2002 6.45347L13.5668 11.8201L8.2002 17.1867L8.60013 17.5867Z"
        fill={fill}
      />
    </svg>
  );
};

export default IconArrowRight;

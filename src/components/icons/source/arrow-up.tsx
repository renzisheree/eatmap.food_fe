import { IconProperty } from "@/@custom-types";
import React from "react";

const IconArrowUp = ({
  width = 24,
  height = 24,
  fill = "#ea580c",
}: IconProperty) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.5048 17.4501C20.1651 16.753 20.1651 15.6211 19.5048 14.924L12.0006 7L4.49637 14.924C3.8364 15.6209 3.83642 16.7514 4.48523 17.4484L5.00759 18L11.9958 10.6209L18.984 18L19.5048 17.4501Z"
        fill={fill}
      />
    </svg>
  );
};

export default IconArrowUp;

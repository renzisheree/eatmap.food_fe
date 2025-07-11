import { IconProps } from "..";
import React from "react";

const IconTrash = ({ size = 24, color = "#ea580c" }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.4987 2.5V3.33333H3.33203V5H4.16536V15.8333C4.16536 16.2754 4.34096 16.6993 4.65352 17.0118C4.96608 17.3244 5.39 17.5 5.83203 17.5H14.1654C14.6074 17.5 15.0313 17.3244 15.3439 17.0118C15.6564 16.6993 15.832 16.2754 15.832 15.8333V5H16.6654V3.33333H12.4987V2.5H7.4987ZM5.83203 5H14.1654V15.8333H5.83203V5ZM7.4987 6.66667V14.1667H9.16536V6.66667H7.4987ZM10.832 6.66667V14.1667H12.4987V6.66667H10.832Z"
        fill={color}
      />
    </svg>
  );
};

export default IconTrash;

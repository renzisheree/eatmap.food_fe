import { IconProps } from "..";
import React from "react";

const IconErrorYellow = ({ size = 14 }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 7C14 10.866 10.866 14 7 14C3.13401 14 0 10.866 0 7C0 3.13401 3.13401 0 7 0C10.866 0 14 3.13401 14 7ZM7.3255 3.18182H6.6745C6.1005 3.18182 5.656 3.8866 5.72727 4.45455L6.36396 8.27273H7.63637L8.27273 4.45455C8.344 3.8866 7.8995 3.18182 7.3255 3.18182ZM7.63637 9.84116V10.5011C7.63637 10.6761 7.49414 10.8182 7.31819 10.8182H6.68183C6.50587 10.8182 6.36364 10.6761 6.36364 10.5011V9.54545H7.31819C7.49414 9.54545 7.63637 9.66612 7.63637 9.84116Z"
        fill="#FED141"
      />
    </svg>
  );
};

export default IconErrorYellow;

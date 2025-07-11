import { IconProps } from "..";
import React from "react";

const IconMail = ({ size = 24, color = "#ea580c" }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.5116 5.00012H3.48837C2.65116 5.00012 2 5.65129 2 6.48849V17.4652C2 18.3024 2.65116 18.9536 3.48837 18.9536H20.5116C21.3488 18.9536 22 18.3024 22 17.4652V6.48849C22 5.65129 21.2558 5.00012 20.5116 5.00012ZM18.4651 6.95361L11.9535 11.8838L5.44186 6.95361H18.4651ZM19.9535 17.0001H3.95349V8.34896L11.0233 13.7443C11.5814 14.1164 12.3256 14.1164 12.8837 13.7443L19.9535 8.34896V17.0001Z"
        fill={color}
      />
    </svg>
  );
};

export default IconMail;

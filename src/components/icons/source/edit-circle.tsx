import React from "react";

const EditCircle = ({ size = 32, color = "#ea580c" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="16"
        cy="16"
        r="15"
        fill="white"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.1597 11.9528L19.8374 10.6471L14.0021 16.4118V17.7175H15.3239L21.1597 11.9528ZM22.6336 12.997L16.015 19.5349H12.3351V15.8999L18.9537 9.36194C19.4423 8.87935 20.2338 8.87935 20.7224 9.36194L22.6336 11.2499C23.1221 11.7325 23.1221 12.5144 22.6336 12.997V12.997ZM21.9216 17.2353H22.3385V21.7647C22.3385 22.447 21.7787 23 21.088 23H10.2505C9.55982 23 9 22.447 9 21.7647V11.0589C9 10.3766 9.55982 9.82362 10.2505 9.82362H14.8362V10.2354C14.8362 10.9177 14.276 11.4707 13.5857 11.4707H10.6674V21.353H20.6711V18.4706C20.6711 17.7883 21.2314 17.2353 21.9216 17.2353V17.2353Z"
        fill={color}
      />
    </svg>
  );
};

export default EditCircle;

import { IconProperty } from "@/@custom-types";

const IconArrowTop = ({
  width = 24,
  height = 25,
  fill = "#ea580c",
}: IconProperty) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.9631 15.9237C18.4701 15.4167 18.4701 14.5935 17.9631 14.0865L12.2002 8.32361L6.43734 14.0865C5.93052 14.5933 5.93053 15.4156 6.42878 15.9225L6.82994 16.3236L12.1965 10.957L17.5632 16.3236L17.9631 15.9237Z"
        fill={fill}
      />
    </svg>
  );
};

export default IconArrowTop;

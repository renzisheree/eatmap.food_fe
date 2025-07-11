import { IconProperty } from "@/@custom-types";

const IconCalendar = ({
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
        d="M18 4.5V3C18 2.725 17.775 2.5 17.5 2.5H16.5C16.225 2.5 16 2.725 16 3V4.5H7.48499V3C7.48499 2.725 7.25999 2.5 6.98499 2.5H5.98499C5.70999 2.5 5.48499 2.725 5.48499 3V4.5H4.5C3.67 4.5 3 5.17 3 6V20C3 20.83 3.67 21.5 4.5 21.5H19.5C20.33 21.5 21 20.83 21 20V6C21 5.17 20.33 4.5 19.5 4.5H18ZM19 6.5V8.5H5V6.5H19ZM5 19.5V10.5H19V19.5H5Z"
        fill={fill}
      />
    </svg>
  );
};

export default IconCalendar;

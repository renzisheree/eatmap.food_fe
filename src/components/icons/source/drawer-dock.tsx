import React from "react";
import styled from "styled-components";
import { device } from "@/styles/media";

const DrawerDockSVG = styled.svg`
  height: 130px;
  width: 260px;
  @media ${device.mobile} {
    width: 160px;
    height: 77px;
  }
`;
const DrawerDock = () => {
  return (
    <DrawerDockSVG
      viewBox="0 0 266 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.658691"
        y="23.6831"
        width="264.57"
        height="81.9922"
        fill="#ea580c"
      />
      <ellipse
        cx="132.924"
        cy="23.9388"
        rx="132.285"
        ry="23.829"
        fill="#FAE4D3"
      />
      <ellipse
        cx="132.924"
        cy="105.418"
        rx="132.285"
        ry="23.829"
        fill="#ea580c"
      />

      <ellipse
        cx="132.925"
        cy="23.4264"
        rx="94.2497"
        ry="14.0924"
        fill="black"
        fillOpacity="0.25"
      />
    </DrawerDockSVG>
  );
};

export default DrawerDock;

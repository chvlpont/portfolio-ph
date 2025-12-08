import React from "react";
import { IconType } from "react-icons";

export const ZustandIcon: IconType = (props) => (
  <svg
    viewBox="0 0 32 32"
    fill="currentColor"
    width="1em"
    height="1em"
    {...props}
  >
    {/* Stylized bear paw icon for Zustand */}
    <g>
      {/* Main paw pad */}
      <ellipse cx="16" cy="20" rx="6" ry="5" fill="currentColor" opacity="0.9" />

      {/* Toe pads */}
      <ellipse cx="10" cy="12" rx="2.5" ry="3" fill="currentColor" opacity="0.85" />
      <ellipse cx="15" cy="10" rx="2.5" ry="3" fill="currentColor" opacity="0.85" />
      <ellipse cx="20" cy="11" rx="2.5" ry="3" fill="currentColor" opacity="0.85" />
      <ellipse cx="24" cy="14" rx="2" ry="2.5" fill="currentColor" opacity="0.85" />

      {/* Shadow/depth effect */}
      <ellipse cx="16" cy="21" rx="4" ry="3" fill="currentColor" opacity="0.3" />
    </g>
  </svg>
);
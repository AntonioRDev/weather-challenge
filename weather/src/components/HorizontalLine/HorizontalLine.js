import React from "react";
import "./HorizontalLine.css";

export default function HorizontalLine({ color }) {
  return (
    <div
      className="hl-container"
      style={{ borderTop: `2px solid ${color ? color : "white"}` }}
    />
  );
}

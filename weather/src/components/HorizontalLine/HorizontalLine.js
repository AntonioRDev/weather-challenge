import React from "react";

export default function HorizontalLine({ color }) {
  return (
    <div
      className="h-1"
      style={{ borderTop: `2px solid ${color ? color : "white"}` }}
    />
  );
}

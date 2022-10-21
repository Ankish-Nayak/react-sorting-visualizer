import React from "react";
export default function Bar(props) {
  const { height, idx, color } = props;
  return (
    <div
      className={`bar ${color}-bar`}
      style={{
        height: height,
        left: 300 + idx * 32,
      }}
    ></div>
  );
}

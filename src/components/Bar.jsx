import React from "react";
export default function Bar(props) {
  const { height, idx , selected} = props;
  return (
    <div
      className={`bar ${selected ? "selectedBar" : ""}`}
      style={{
        height: height,
        left: 300 + idx * 32,
      }}
    ></div>
  );
}

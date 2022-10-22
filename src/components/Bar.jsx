import React from "react";
export default function Bar(props) {
  const { height, idx, color,dimensions } = props;
  const d = dimensions();
  return (
    <div
      className={`bar ${color}-bar`} 
      style={{
        height: height,
        left: (0.25 *d.width + idx * 32), 
      }}
    >
      {/* <div className="bar-text">{height}</div> */}
    </div>
  );
}

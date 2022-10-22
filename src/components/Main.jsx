import React from "react";
import Bar from "./Bar";
export default function Main(props) {
  const { bars, dimensions } = props;
  //   console.log("Main rendered");
  return (
    <div className="bars" ref={props.barsContainerRef}>
      {bars.map((bar, idx) => {
        return (
          <Bar key={idx} idx={idx} height={bar.value} color={bar.color} dimensions={dimensions} />
        );
      })}
    </div>
  );
}

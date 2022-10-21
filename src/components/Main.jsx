import React from "react";
import Bar from "./Bar";
export default function Main(props) {
  const { bars } = props;
  //   console.log("Main rendered");
  return (
    <div className="bars">
      {bars.map((bar, idx) => {
        return (
          <Bar key={idx} idx={idx} height={bar.value} color={bar.color} />
        );
      })}
    </div>
  );
}

import React from "react";
import Sidebar from "./Sidebar";
import Main from "./Main";

export default function App() {
  const [bars, setBars] = React.useState(allNewBars); 
  function randomBar(range) {
    return Math.floor(Math.random() * range);
  }
  function allNewBars(n = 20, range = 500) {
    let res = [];
    for (let i = 0; i < n; ++i) {
      res.push(randomBar(range));
    } 
    return res;
  }  
  function sortBars() { 
    setBars((prevBars) => {
      let res = [];
      for (let i = 0; i < prevBars.length; ++i) {
        res.push(prevBars[i]);
      } 
      res.sort((a, b) => a - b); 
      return res;
    });
  }
  return (
    <main>
      <Sidebar sortBars={sortBars} />
      <Main bars={bars} />
    </main>
  );
}

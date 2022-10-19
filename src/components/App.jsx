import React, { startTransition } from "react";
import Sidebar from "./Sidebar";
import Main from "./Main";

export default function App() {
  const [bars, setBars] = React.useState(allNewBars);
  const steps = React.useRef([]);
  const timeOuts = React.useRef([]); // used to store setTimeout reference to clear it
  React.useEffect(() => {
    return () => {
      timeOuts.current.forEach((timeOut) => clearTimeout(timeOut));
    };
  }, []);
  function randomBar(range) {
    return Math.floor(Math.random() * range);
  }
  function allNewBars(n = 5 , range = 500) {
    let res = [];
    for (let i = 0; i < n; ++i) {
      res.push({
        value: randomBar(range),
        selected: 0, // 0 comparing 1 compared and to be swap 2 sorted
      });
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

  function stepClear() {
    while (steps.current.size > 0) {
      steps.current.pop();
    }
  }
  function stepCopy(bars) {
    let newBars = [];
    bars.forEach((bar) => {
      newBars.push({
        ...bar,
      });
    });
    steps.current.push(newBars);
  }
  function insertionSort() {
    console.log("called insertionSort");
    // we will clear all the previous steps we had in steps array
    stepClear();
    const tempBars = [];

    bars.forEach((bar) =>
      tempBars.push({
        ...bar,
      })
    );
    console.log(tempBars);
    console.log(tempBars.length);
    for (let step = 1; step < tempBars.length; step++) {
      console.log("ed");
      let key = {
        ...tempBars[step],
      };
      let j = step - 1;
      // Compare key with each element on the left of it until an element smaller than
      // it is found.
      // For descending order, change key<tempBars[j] to key>tempBars[j].
      if (key.value > tempBars[j].value) {
        tempBars[j + 1].selected = tempBars[j].selected = 1;
        stepCopy(tempBars);
        // tempBars.forEach(bar => steps.current.push({
        //   ...bar
        // }));
        tempBars[j + 1].selected = tempBars[j].selected = 0;
        // do deep copy
        stepCopy(tempBars);
      }
      console.log(step);
      while (j >= 0 && key.value < tempBars[j].value) {
        tempBars[j + 1].selected = tempBars[j].selected = 1;
        // do deep copy
        stepCopy(tempBars);
        tempBars[j + 1] = { ...tempBars[j] };
        tempBars[j + 1].selected = tempBars[j].selected = 0;
        --j;
      }
      tempBars[j + 1] = { ...key };
      console.log("d");
      // do deep copy
      stepCopy(tempBars);
    }
    // console.log(steps.current);
    // console.log(tempBars);
    start();
  }
  function start() {
    console.log("called start");
    console.log(steps.current);
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    let cnt = 0;
    for (let i = 0; i < steps.current.length; ++i) {
      console.log(steps.current[i]);
      const b = steps.current[i];
      let timeOut;
      (() => {
        timeOut = setTimeout((i) => {
          setBars([...b]);
        }, i * 500);
      })();
      timeOuts.current.push(timeOut);
    }
  }
  function bubbleSort() {
    const tempBars = [];
    bars.forEach((bar) => {
      tempBars.push({
        ...bar,
      });
    });
    stepClear();
    for (let step = 0; step < tempBars.length; ++step) {
      // loop to compare array elements
      for (let i = 0; i < tempBars.length - step; ++i) {
        // compare two adjacent elements
        // change > to < to sort in descending order
        if (
          i + 1 < tempBars.length &&
          tempBars[i].value < tempBars[i + 1].value
        ) {
          tempBars[i].selected = tempBars[i + 1].selected = 1;
          stepCopy(tempBars);
          tempBars[i].selected = tempBars[i + 1].selected = 0;
          stepCopy(tempBars);
        }
        if (
          i + 1 < tempBars.length &&
          tempBars[i].value > tempBars[i + 1].value
        ) {
          tempBars[i].selected = tempBars[i + 1].selected = 1;
          stepCopy(tempBars);
          let temp = {
            ...tempBars[i],
          };
          tempBars[i] = {
            ...tempBars[i + 1],
          };
          tempBars[i + 1] = {
            ...temp,
          };
          stepCopy(tempBars);
          tempBars[i].selected = tempBars[i + 1].selected = 0;
          stepCopy(tempBars);
        }
      }
    }
    start();
  }
  function selectionSort() {}
  function mergeSort() {

    
  }
  function quickSort() {}

  return (
    <main>
      <Sidebar
        insertionSort={insertionSort}
        bubbleSort={bubbleSort}
        selectionSort={selectionSort}
        mergeSort={mergeSort}
        quickSort={quickSort}
      />
      <Main bars={bars} />
    </main>
  );
}

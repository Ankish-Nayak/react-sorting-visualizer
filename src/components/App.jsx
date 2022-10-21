import React, { startTransition } from "react";
import Sidebar from "./Sidebar";
import Main from "./Main";
import bubbleSort from "./BubbleSort";
import insertionSort from "./InsertionSort";
import mergeSort from "./MergeSort";
import selectionSort from "./SelectionSort";
import quickSort from "./QuickSort";

// done Changes here
export default function App() {
  const [ barCnt, setBarCnt] = React.useState(100);
  const [selectedAlgorithm, setSelectedAlgorithm] = React.useState("");
  const [sorting, setSorting] = React.useState(false);
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
  function allNewBars(n = 6, range = 500) {
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
    setSorting(true);
    console.log("sortBars");
    switch (selectedAlgorithm) {
      case "insertionSort":
        insertionSort(bars, stepClear, stepCopy, start);
        break;
      case "selectionSort":
        selectionSort(bars, stepClear, stepCopy, start);
        break;
      case "mergeSort":
        mergeSort(bars, stepClear, stepCopy, start);
        break;
      case "quickSort":
        quickSort(bars, stepClear, stepCopy, start);
        break;
      case "bubbleSort":
        bubbleSort(bars, stepClear, stepCopy, start);
        break;
      default:
        setSorting(false);
        console.log("problem");
    }
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
  function start() {
    console.log("called start");
    console.log(steps.current);
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    let cnt = 0;
    for (let i = 0; i < steps.current.length; ++i) {
      const b = steps.current[i];
      const isLast = i === steps.current.length - 1 ? true : false;
      let timeOut;
      (() => {
        timeOut = setTimeout((steps, i) => {
          setBars([...b]);
          if (isLast) {
            console.log("done");
            setSorting(false);
            setSelectedAlgorithm("");
          }
        }, i * 500);
      })();
      timeOuts.current.push(timeOut);
    }
    console.log("start");
  }
  function reStart(){
    setBars(()=>{
      return allNewBars();
    });
  }

  return (
    <main>
      <Sidebar
        selectedAlgorithm={selectedAlgorithm}
        setSelectedAlgorithm={setSelectedAlgorithm}
        sortBars={sortBars}
        sorting={sorting}
        reStart={reStart}
      />
      <Main bars={bars} 
      />
    </main>
  );
}

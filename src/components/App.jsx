import React from "react";
import Sidebar from "./Sidebar";
import Main from "./Main";
import bubbleSort from "./algorithms/BubbleSort";
// import insertionSort from "./algorithms/InsertionSort";
import mergeSort from "./algorithms/MergeSort";
import selectionSort from "./algorithms/SelectionSort";
import quickSort from "./algorithms/QuickSort";
import GetMeasure  from './GetMeasure'
import heapSort from "./algorithms/HeapSort";

// done Changes here
export default function App() {
  const [ barCnt, setBarCnt] = React.useState(10);
  const [ delay, setDelay] = React.useState(200);
  const [selectedAlgorithm, setSelectedAlgorithm] = React.useState("");
  const [sorting, setSorting] = React.useState(false);
  const [bars, setBars] = React.useState(allNewBars);
  const steps = React.useRef([]);
  const timeOuts = React.useRef([]); // used to store setTimeout reference to clear it
  React.useEffect(() => { 
    setBars(allNewBars(barCnt));
    setSelectedAlgorithm("");
    return () => {
      timeOuts.current.forEach((timeOut) => clearTimeout(timeOut));
    };
  }, [barCnt]);
  const barsContainerRef = React.useRef(); 
  function randomBar(range) {
    return Math.floor(Math.random() * range);
  }
  function allNewBars(n, range = 500) {
    let res = [];
    for (let i = 0; i < n; ++i) {
      res.push({
        value: randomBar(range),
        color: "blue", // 
      });
    }
    return res;
  }
  function sortBars() {
    setSorting(true);
    // console.log("sortBars");
    switch (selectedAlgorithm) {
      // case "insertionSort":
      //   insertionSort(bars, stepClear, stepCopy, start);
      //   break;
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
      case "heapSort":
        heapSort( bars, stepClear, stepCopy, start);
        break;
      default:
        alert("Select algorithm")
        setSorting(false);
        // console.log("problem");
    }
  }

  function stepClear() {
    while (steps.current.length > 0) {
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
    // console.log("called start");
    // console.log(steps.current);
    for (let i = 0; i < steps.current.length; ++i) {
      const b = steps.current[i];
      const isLast = i === steps.current.length - 1 ? true : false;
      // console.log(b);
      let timeOut;
      (() => {
        timeOut = setTimeout((steps, i) => {
          setBars([...b]);
          if (isLast) {
            // console.log("done");
            setSorting(false);
            setSelectedAlgorithm("");
          }
        }, i * delay);
      })();
      timeOuts.current.push(timeOut);
    }
    stepClear();
    // console.log("start");
  }
  function reStart(){
    setBars(()=>{
      return allNewBars(barCnt);
    });
  }
  function cancelSorting(){
    // console.log("cancelled sorting");
    timeOuts.current.forEach(timeOut => clearTimeout(timeOut));
    reStart();
    setSorting(false);
  }

  return (
    <main>
      <Sidebar
        selectedAlgorithm={selectedAlgorithm}
        setSelectedAlgorithm={setSelectedAlgorithm}
        sortBars={sortBars}
        sorting={sorting}
        reStart={reStart}
        barCnt={barCnt}
        setBarCnt={setBarCnt}
        delay={delay}
        setDelay={setDelay}
        allNewBars={allNewBars}
        cancelSorting={cancelSorting}
      />
      <Main bars={bars} 
        barsContainerRef={barsContainerRef}
        dimensions={()=>{
          return GetMeasure(barsContainerRef);
        }}
      />
    </main>
  );
}

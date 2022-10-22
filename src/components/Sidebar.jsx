import React from "react";
import BarCntSlider from "./BarCntSlider";
import "react-rangeslider/lib/index.css";
import DelaySlider from "./DelaySlider";

export default function Sidebar(props) {
  //   console.log("side bar rendered");
  const algorithms = [
    // {
    //   id: "insertionSort",
    //   name: "Insertion Sort",
    // },
    {
      id: "selectionSort",
      name: "Selection Sort",
    },
    {
      id: "mergeSort",
      name: "Merge Sort",
    },
    {
      id: "quickSort",
      name: "Quick Sort",
    },
    {
      id: "bubbleSort",
      name: "Bubble Sort",
    },
    {
      id: "heapSort",
      name: "Heap Sort"
    }
  ];

  return (
    <div className="sidebar">
      <h1 className="sidebar-heading">Algorithms</h1>
      {algorithms.map((algorithm, idx) => {
        let state = "";
        if (props.selectedAlgorithm === algorithm.id) {
          state = "selectedAlgorithm";
        } else if (props.sorting) {
          state = "disabledAlgorithm";
        }
        return (
          <div
            key={idx}
            className={`algorithms ${algorithm.id} ${state}`}
            onClick={() => {
              if (state === "") {
                props.setSelectedAlgorithm(algorithm.id);
              }
            }}
          >
            {algorithm.name}
          </div>
        );
      })}
      <div
        className={`sidebar-button ${
          props.sorting ? "disabledSidebarButton" : ""
        }}`}
        onClick={() => {
          if (!props.sorting) {
            props.sortBars();
          }
        }}
      >
        sort
      </div>
      {!props.sorting && (
        <BarCntSlider barCnt={props.barCnt} setBarCnt={props.setBarCnt} />
      )}
      {!props.sorting && (
        <DelaySlider delay={props.delay} setDelay={props.setDelay} />
      )}
      {!props.sorting && (
        <div className="sidebar-button" onClick={() => props.reStart()}>
          New Array
        </div>
      )}
      {props.sorting && (
        <div className="sidebar-button" onClick={() => props.cancelSorting()}>
          Cancel Sorting
        </div>
      )}
    </div>
  );
}

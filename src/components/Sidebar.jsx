import React from "react";

export default function Sidebar(props) {
  //   console.log("side bar rendered");
  return (
    <div className="sidebar">
      <h1 className="sidebar-heading">Algorithms</h1>
      <div
        className="algorithms insertionSort selectedAlgorithm"
        onClick={() => props.insertionSort()}
      >
        Insertion sort
      </div>
      <div className="algorithms bubbleSort" onClick={() => props.bubbleSort()}>
        Bubble Sort
      </div>
      <div
        className="algorithms selectionSort"
        onClick={() => props.selectionSort()}
      >
        Selection Sort
      </div>
      <div className="algorithms mergeSort" onClick={() => props.mergeSort()}>
        Merge Sort
      </div>
      <div className="algorithms quickSort" onClick={() => props.quickSort()}>
        Quick Sort
      </div>
      <div
        className="sidebar-button"
        // onClick={() => {
        //   sortBars();
        //   //   console.log("clicked");
        // }}
      >
        sort
      </div>
      {/* {showRestart && <div className="sidebar-button" onClick={()=>reStart()}>New Array</div>} */}
    </div>
  );
}

import React from "react";

export default function Sidebar(props) {
//   console.log("side bar rendered");
  const { sortBars } = props;
  return (
    <div className="sidebar">
      <h1 className="sidebar-heading">Algorithms</h1>
      <div className="algorithms insertionSort selectedAlgorithm">
        Insertion sort
      </div>
      <div className="algorithms bubbleSort">Bubble Sort</div>
      <div className="algorithms selectionSort">Selection Sort</div>
      <div className="algorithms mergeSort">Merge Sort</div>
      <div className="algorithms quickSort">Quick Sort</div>
      <div
        className="sidebar-button"
        onClick={() => {
          sortBars();
        //   console.log("clicked");
        }}
      >
        sort
      </div>
    </div>
  );
}

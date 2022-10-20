import React from "react";

export default function Sidebar(props) {
  //   console.log("side bar rendered");
  const algorithms = [
    {
      id: "insertionSort",
      name: "Insertion Sort",
    },
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
  ];

  return (
    <div className="sidebar">
      <h1 className="sidebar-heading">Algorithms</h1>
      {algorithms.map((algorithm,idx) => {
        let state = "";
        if (props.selectedAlgorithm === algorithm.id) {
          state = "selectedAlgorithm";
        } else if (props.selectedAlgorithm !== "") {
          state = "disabledAlgorithm";
        } 
        return (
          <div
            key={idx}
            className={`algorithms ${algorithm.id} ${state}`}
            onClick={
              ()=>{
                if(state === ""){
                  props.setSelectedAlgorithm(algorithm.id);
                }
              }
            }
          >
            {algorithm.name}
          </div>
        );
      })} 
      <div 
        className={`sidebar-button ${props.sorting ? "disabledSidebarButton" : ""}}`}
        onClick={() => {
          if(!props.sorting) {
            props.sortBars()
          }
        }}
      >
        sort
      </div>
      {/* {showRestart && <div className="sidebar-button" onClick={()=>reStart()}>New Array</div>} */}
    </div>
  );
}

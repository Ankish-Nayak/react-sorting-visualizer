import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import Main from "./Main";

export default function App() {
  const [bars, setBars] = React.useState(allNewBars); 
  const [showRestart,setShowRestart] = React.useState(true);
  function randomBar(range) {
    return Math.floor(Math.random() * range);
  } 
  function allNewBars(n = 5, range = 500) {
    let res = [];
    for (let i = 0; i < n; ++i) {
      res.push({
        value: randomBar(range),
        selected: false
      });
    }  
    return res;
  }   
  function sortBars() { 
    
    let steps = []; // we will use this store all steps in particular algorithm took to sort the array
    // 
    function swap(arr,i,j){
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    let array = [];
    for(let i = 0; i<bars.length; ++i){
      array.push(bars[i].value);
    }
    let size = array.length;
    steps.push(array);
    const sleep = ms => new Promise(resolve => setTimeout(resolve,ms));
    (async () =>{
      setShowRestart(!showRestart);
      for(let step = 1; step<size; ++step){ 
        let j = step;
        let newArray = [];
        for(let i = 0; i<array.length; ++i){
          newArray.push({
            value: array[i],
            selected: false
          }); 
        } 
        await sleep(500); 
        while(j > 0 && array[j] < array[j-1]){
          newArray[j].selected = true;
          newArray[j-1].selected = true;
          setBars([...newArray]);
          await sleep(200);
          swap( array, j, j-1);
          swap( newArray, j, j-1);
          setBars([...newArray]);
          await sleep(500);
          newArray[j].selected = false;
          newArray[j-1].selected = false;
          j--;
        } 
        setBars([...newArray]);
        await sleep(20);
      }  
      setBars(prevArray => [...prevArray]);
    })(); 
   ;
  }
  function reStart(){
    console.log('click')
    setBars((prevArray)=>{
      return allNewBars();
    });
  }
  return (
    <main>
      <Sidebar sortBars={sortBars} reStart={reStart} showRestart={showRestart}/>
      <Main bars={bars} />
    </main>
  );
}

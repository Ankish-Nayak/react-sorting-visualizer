import React, { useEffect } from "react";
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
  // useEffect(()=>{
  //   return ()=>{
  //     clearTimeout()
  //   }
  // },[])
  function sortBars() { 
    let steps = []; // we will use this store all steps in particular algorithm took to sort the array
    // 
    
    let array = [...bars];
    let size = array.length;
    steps.push(array);
    const sleep = ms => new Promise(resolve => setTimeout(resolve,ms));
    (async () =>{
      for(let step = 1; step<size; ++step){
        let key = array[step];
        let j = step-1;
 
        await sleep(20);
        while(key < array[j] && j >= 0){ 
          setBars([...array]);
          await sleep(20); 

          array[j+1] = array[j];
          setBars([...array]);
          await sleep(20);
          j--;
        } 
        array[j + 1] = key; 
        setBars([...array]);
        await sleep(20);
      }
    })();
    // for (let step = 1; step < size; step++) {
    //   let key = array[step];
    //   let j = step - 1;
  
    //   // Compare key with each element on the left of it until an element smaller than
    //   // it is found.
    //   // For descending order, change key<array[j] to key>array[j].
    //   while (key < array[j] && j >= 0) {
    //     array[j + 1] = array[j];
    //     steps.push([...array]);
    //     --j;
    //   }
    //   array[j + 1] = key;
    //   steps.push([...array]); 
    // } 
    // (async () => {
    //   for(let i = 0; i<steps.length; ++i){
    //     console.log(steps[i]);
    //     setBars(steps[i]);
    //     await sleep(i);
    //   }
    // })();
  }
  return (
    <main>
      <Sidebar sortBars={sortBars} />
      <Main bars={bars} />
    </main>
  );
}

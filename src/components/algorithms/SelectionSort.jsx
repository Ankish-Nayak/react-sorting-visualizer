export default function selectionSort(bars, stepClear, stepCopy, start) {
  stepClear();
  let tempBars = [];
  bars.forEach((bar) => {
    tempBars.push({
      ...bar,
    });
  });

  for(let i = 0; i<tempBars.length; ++i){
    let minIdx = i;
    for(let j = i+1; j<tempBars.length; ++j){ 
      tempBars[minIdx].color = 'orange'; // selecting minimum element
      tempBars[j].color = 'red';
      stepCopy(tempBars);
      tempBars[j].color = false;
      if(tempBars[j].value < tempBars[minIdx].value){
        tempBars[minIdx].color = 'blue';
        minIdx = j;
      }
    } 
    stepCopy(tempBars);
    // tempBars[i].color = tempBars[minIdx].color = true;
    let temp = {...tempBars[minIdx]};
    tempBars[minIdx]  = {...tempBars[i]}
    tempBars[i] = temp;
    stepCopy(tempBars); 
    for(let j = 0; j <= i; ++j){
      tempBars[j].color = 'green';
    }
  }
  stepCopy(tempBars);
  start();
}

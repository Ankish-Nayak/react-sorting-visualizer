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
    tempBars[i].selected = true; // selecting minimum element
    for(let j = i+1; j<tempBars.length; ++j){ 
      tempBars[j].selected = true;
      stepCopy(tempBars);
      tempBars[j].selected = false;
      if(tempBars[j].value < tempBars[minIdx].value){
        minIdx = j;
      }
    } 
    stepCopy(tempBars);
    tempBars[i].selected = tempBars[minIdx].selected = true;
    let temp = {...tempBars[minIdx]};
    tempBars[minIdx]  = {...tempBars[i]}
    tempBars[i] = temp;
    stepCopy(tempBars);
    tempBars[i].selected = tempBars[minIdx].selected = false;
  }
  stepCopy(tempBars);
  start();
}

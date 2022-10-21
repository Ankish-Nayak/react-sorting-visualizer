export default function bubbleSort(bars, stepClear, stepCopy, start) {
  const tempBars = [];
  bars.forEach((bar) => {
    tempBars.push({
      ...bar,
    });
  });
  stepClear();
  for (let step = 0; step < tempBars.length; ++step) {
    // loop to compare array elements
    for (let i = 0; i < tempBars.length - step; ++i) {
      // compare two adjacent elements
      // change > to < to sort in descending order
      if (
        i + 1 < (tempBars.length - step) &&
        tempBars[i].value < tempBars[i + 1].value
      ) {
        tempBars[i].color = tempBars[i + 1].color = 'red';
        stepCopy(tempBars);
        tempBars[i].color = tempBars[i + 1].color = 'blue';
        stepCopy(tempBars);
      }
      if (
        i + 1 < (tempBars.length - step) &&
        tempBars[i].value > tempBars[i + 1].value
      ) {
        tempBars[i].color = tempBars[i + 1].color = 'red';
        stepCopy(tempBars);
        let temp = {
          ...tempBars[i],
        };
        tempBars[i] = {
          ...tempBars[i + 1],
        };
        tempBars[i + 1] = {
          ...temp,
        };
        stepCopy(tempBars);
        tempBars[i].color = tempBars[i + 1].color = 'blue';
        stepCopy(tempBars);
      }
    }
    for(let i = (tempBars.length-(step+1)); i<tempBars.length; ++i){
      tempBars[i].color = 'green';
    }
    stepCopy(tempBars); 
  }
  start();
}

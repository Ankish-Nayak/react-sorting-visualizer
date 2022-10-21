export default function quickSort(bars, stepClear, stepCopy, start) {
  stepClear();
  let tempBars = [];
  bars.forEach((bar) => {
    tempBars.push({
      ...bar,
    });
  });
  function swap( bars, l, r){ 
    let temp = {...bars[l]};
    bars[l] = {...bars[r]};
    bars[r] = temp;
  }
  function partition( bars, l, r){
    // l,r are active 
    let pivot = bars[r];
    bars[r].color = 'red';
    let i = l-1;
    // bar
    for(let j = l; j<r; ++j){
        bars[j].color = 'red';
        bars.forEach(bar => (bar.color === 'orange' ? 'blue' : bar.color));
        bars[i+1].color = 'orange';
        stepCopy(bars)
        if(bars[j].value <= pivot.value){ 
            bars[j].color = 'blue';
            // bars[i+1].color = 'blue'
            stepCopy(bars);
            i++;
            swap( bars, i, j); 
            bars[i+1].color = 'orange';
            bars[j].color = 'blue';
            stepCopy(bars); 
        }else{
            bars[j].color = 'blue';
        }
    }
    swap( bars, i+1, r);
    stepCopy(bars);
    bars[i+1].color='green';
    for(let k = l; k<=r; ++k){
        if(k !== i+1){
            bars[k].color = 'blue';
        }
    }
    // bars[i+1].color = bars[r].color = false;
    stepCopy(bars);
    return (i+1);
  }
  function quickSortHelper( bars, l, r){
    if(l === r){
        bars[l].color = 'green';
        stepCopy(bars);
        return;
    }
    if(l < r){ 
        let pivotIdx = partition( bars, l, r);
        quickSortHelper( bars, l, pivotIdx-1);
        quickSortHelper( bars, pivotIdx+1, r);
    }
  }
  quickSortHelper( bars, 0, bars.length-1);
  start();
}

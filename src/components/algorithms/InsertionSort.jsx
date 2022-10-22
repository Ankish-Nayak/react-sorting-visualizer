export default function insertionSort(bars, stepClear, stepCopy, start) {
  // console.log("called insertionSort");
  // we will clear all the previous steps we had in steps array
  stepClear();
  const tempBars = [];

  bars.forEach((bar) =>
    tempBars.push({
      ...bar,
    })
  );
  // console.log(tempBars);
  // console.log(tempBars.length);
  for (let step = 1; step < tempBars.length; step++) {
    // console.log("ed");
    let key = {
      ...tempBars[step],
    };
    let j = step - 1;
    // Compare key with each element on the left of it until an element smaller than
    // it is found.
    // For descending order, change key<tempBars[j] to key>tempBars[j].
    if (key.value > tempBars[j].value) {
      tempBars[j + 1].color = tempBars[j].color = 'red';
      stepCopy(tempBars);
      // tempBars.forEach(bar => steps.current.push({
      //   ...bar
      // }));
      tempBars[j + 1].color = tempBars[j].color = 'blue';
      // do deep copy
      stepCopy(tempBars);
    }
    // console.log(step);
    while (j >= 0 && key.value < tempBars[j].value) {
      tempBars[j + 1].color = tempBars[j].color = 'red';
      // do deep copy
      stepCopy(tempBars);
      tempBars[j + 1] = { ...tempBars[j] };
      tempBars[j + 1].color = tempBars[j].color = 'blue';
      --j;
    }
    tempBars[j + 1] = { ...key };
    // console.log("d");
    tempBars[j+1].color = 'green';
    // do deep copy
    stepCopy(tempBars);
  } 
  // console.log("insertionSort");
  start();
}

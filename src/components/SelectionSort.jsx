export default function selectionSort(bars, stepClear, stepCopy, start) {
  stepClear();
  let tempBars = [];
  bars.forEach((bar) => {
    tempBars.push({
      ...bar,
    });
  });
}

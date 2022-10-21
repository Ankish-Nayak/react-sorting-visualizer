export default function mergeSort(bars, stepClear, stepCopy, start) {
  stepClear();
  let tempBars = [];
  bars.forEach((bar) => {
    tempBars.push({
      ...bar,
    });
  });

  function merge(bars, l, mid, r) {
    let i = l;
    let j = mid + 1;
    const temp = [];
    for (let k = l; k <= mid; ++k) {
      bars[k].selected = true;
    }
    for (let k = mid + 1; k <= r; ++k) {
      bars[k].selected = true;
    }
    stepCopy(bars);
    while (i <= mid && j <= r) {
      const curr =
        bars[i].value <= bars[j].value ? { ...bars[i++] } : { ...bars[j++] };

      temp.push(curr);
    }
    while (i <= mid) {
      temp.push({ ...bars[i++] });
    }
    while (j <= r) {
      temp.push({ ...bars[j++] });
    }
    let tempIndex = 0;
    while (l <= r) {
      bars[l++] = temp[tempIndex++];
    }
    bars.forEach((bar) => (bar.selected = false));
    stepCopy(bars);
  }
  function mergeSortHelper(bars, l, r) {
    if (l > r) {
      return;
    }
    if (l === r) {
      return;
    }
    let mid = l + Math.floor((r - l) / 2);
    // selecting left part
    mergeSortHelper(bars, l, mid);
    mergeSortHelper(bars, mid + 1, r);
    merge(bars, l, mid, r);
  }
  mergeSortHelper(tempBars, 0, tempBars.length - 1);
  start();
}

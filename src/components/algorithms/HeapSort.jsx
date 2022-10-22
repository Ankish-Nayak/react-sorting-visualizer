export default function heapSort(bars, stepClear, stepCopy, start) {
  const tempBars = [];
  bars.forEach((bar) => tempBars.push({ ...bar }));
  stepClear();
  function swap(array, l, r) {
    let temp = { ...array[l] };
    array[l] = { ...array[r] };
    array[r] = { ...temp };
  }
  function heapify(bars, n, root) {
    let largest = root;
    let left = 2 * root + 1;
    let right = 2 * root + 2;
    if (left >= n && right >= n) {
      return;
    }

    if (left < n) {
      bars[left].color = "red";
    }
    if (right < n) {
      bars[right].color = "red";
    }
    bars[root].color = "red";
    if (left < n && bars[left].value > bars[largest].value) {
      bars[left].color = "red";
      largest = left;
    }
    if (right < n && bars[right].value > bars[largest].value) {
      bars[right].color = "red";
      largest = right;
    }
    stepCopy(bars);
    if (largest !== root) {
      bars[largest].color = bars[root].color = "orange";
      stepCopy(bars);
      swap(bars, root, largest);
      // bars[left].color = bars[right].color = 'blue';
      bars[largest].color = bars[root].color = "orange";
      stepCopy(bars);
      if (left < n) {
        bars[left].color = "blue";
      }
      if (right < n) {
        bars[right].color = "blue";
      }
      bars[root].color = "blue";
      heapify(bars, n, largest);
    } else {
      if (left < n) {
        bars[left].color = "blue";
      }
      if (right < n) {
        bars[right].color = "blue";
      }
      bars[root].color = "blue";
      stepCopy(bars);
    }
  }
  function heapSortHelper(bars, n) {
    for (let i = Math.floor(n / 2) - 1; i >= 0; --i) {
      heapify(bars, n, i);
    }
    for (let i = n - 1; i >= 0; --i) {
      bars[0].color = bars[i].color = "orange";
      stepCopy(bars);
      swap(bars, 0, i);
      bars[0].color = "blue";
      for (let k = i; k < n; ++k) {
        bars[k].color = "green";
      }
      bars[i].color = "green";
      stepCopy(bars);
      heapify(bars, i, 0);
    }
  }
  heapSortHelper(tempBars, tempBars.length);
  start();
}

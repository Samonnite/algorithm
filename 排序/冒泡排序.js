function bubbleSort(arr) {
  for (let j = 0; j < arr.length; j++) {
    let complete = true
    for (let i = 0; i < arr.length - 1 - j; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
        complete = false
      }
    }
    if (complete) {
      break
    }
  }
  return arr
}
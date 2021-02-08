function quickSort(arr) {
  if (arr.length < 2) return arr
  const target = arr[0]
  const left = []
  const right = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < target) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quickSort(left).concat([target], quickSort(right))
}
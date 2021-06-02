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
// 快排 最优解
var quickSort = function (arr, left, right ) {
  let target = arr[left]
  let i =left ,j =right;  //
  if(left > right){  //特别注意这点
      return;
  }
  while( i !== j){
      while(arr[j]>= target && i<j){
          j--
      }
      while(arr[i]<= target && i<j){
          i++
      }
      if(i<j){
          [arr[i],arr[j]] = [arr[j],arr[i]]
      }
  }
  arr[left] =arr[i]
  arr[i]= target
  // 这里的left和下面的right
  quickSort(arr,left,i-1)  
  quickSort(arr,i+1,right)
  return arr
}
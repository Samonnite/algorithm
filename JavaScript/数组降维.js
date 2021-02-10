function flatten(arr) {
  return arr.reduce((res, cur) => {
    if (Array.isArray(cur)) {
      return [...res, ...flatten(cur)]
    } else {
      return [...res, cur]
    }
  })
}
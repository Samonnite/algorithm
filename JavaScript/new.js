function New(Super, ...args) {
  let obj = Object.create(Super.prototype)
  let result = Super.call(obj, ...args)
  if (result && (typeof result === 'object' || typeof result === 'function')) {
    return result
  }
  return obj
}
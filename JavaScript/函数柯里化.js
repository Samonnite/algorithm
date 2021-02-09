function curring(fn, ...args) {
  if (args.length >= fn.length) {
    return fn(...args)
  } else {
    return (...args2) => curring(fn, ...args, ...args2)
  }
}
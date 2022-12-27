/**
* @param fn 执行函数
* @param time 防抖时间
* @param isNow 是否立即执行
*/
function debounce(fn, time, isNow = true) {
  // 设置定时器
  let timer = null
  return function (...args) {
    // 若需要立即执行
    if (isNow) {
      fn.apply(this, ...args)
      return isNow = false
    }
    // 若定时器正在执行，则return
    if (timer) return
    timer = setTimeout(() => {
      fn.apply(this, ...args)
      clearTimeout(timer)
      timer = null
    }, time)
  }
}


/**
* @param fn 执行函数
* @param time 节流时间
*/
function throttle(fn, time) {
  let pre = 0
  return function (...args) {
    let now = Date.now()
    // 若当前时间减去初始时间大于time，则执行函数
    if (now - pre > time) {
      fn.apply(this, ...args)
      // 更新初始时间
      pre = now
    }
  }
}

// 节流精确版
function throttled(fn, delay) {
  let timer = null
  let starttime = Date.now()
  return function (...args) {
      let curTime = Date.now() // 当前时间
      let remaining = delay - (curTime - starttime)  // 从上一次到现在，还剩下多少多余时间
      let context = this
      clearTimeout(timer)
      if (remaining <= 0) {
          fn.apply(context, args)
          starttime = Date.now()
      } else {
          timer = setTimeout(fn, remaining);
      }
  }
}
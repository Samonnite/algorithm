function deepClone(target, map = new Map()) {

  if (typeof target === 'object' && target) {

    // 判断是否循环引用
    if (map.has(target)) {
      return map.get(target);
    }

    let data = target instanceof Array ? [] : {}
    //缓存克隆过的target，避免循环引用
    map.set(target, data);
    // 递归遍历target
    for (let key in target) {
      if (target.hasOwnProperty(key)) {
        data[key] = deepClone(target[key], map)
      }
    }

    return data
  }
  return target

}
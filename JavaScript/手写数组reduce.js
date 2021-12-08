Array.prototype.reduce = function(fn, val) {
  // 很好理解，就判断val是否有传入值
  for (let i = 0; i < this.length; i++) {
      // 没有传入值
      if (typeof val === 'undefined') {
          val = this[i];
      } else { // 有传入val值
          // total就是初始值val，之后的依次传入对应
          val = fn(val, this[i], i, this);
      }
  }
  return val;
};
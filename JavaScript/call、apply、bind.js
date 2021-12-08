/**
 * 
 * @param context 被修改的对象
 * @param args 参数罗列
 */
Function.prototype.myCall = function (context = window, ...args) {
  // 给context加属性
  const fn = Symbol();
  context[fn] = this;

  // 执行属性的函数
  const result = context[fn](...args);

  // 删除属性
  delete context[fn];

  // 返回结果
  return result
}


/**
* 
* @param context 被修改的对象
* @param args 参数为数组
*/
Function.prototype.myApply = function (context = window, args) {
  // 给context加属性
  const fn = Symbol();
  context[fn] = this;

  // 执行属性的函数
  const result = context[fn](...args);

  // 删除属性
  delete context[fn];

  // 返回结果
  return result
}


/**
 * 
 * @param context 被修改的对象
 * @param args 参数罗列
 */
Function.prototype.myBind = function (context = window, ...args1) {
  return (...args2) => {
    return this.call(context, ...args1, ...args2)
  }
}
/**
 * bind() 函数会创建一个新的绑定函数（bound function，BF）。
 * 绑定函数是一个 exotic function object（怪异函数对象），
 * 它包装了原函数对象。调用绑定函数通常会导致执行包装函数。
 * 函数内部有BoundThis属性，在调用包装函数时始终作为 this 值传递的值。
 */
 Function.prototype.bind = function (context, ...args) {
  if (typeof this !== "function") {
    throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
  }

  var self = this;

  var fbound = function () {
      self.apply(this instanceof self ? 
          this : 
          context, args.concat(Array.prototype.slice.call(arguments)));
  }

  fbound.prototype = Object.create(self.prototype);

  return fbound;
}
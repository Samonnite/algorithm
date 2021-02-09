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
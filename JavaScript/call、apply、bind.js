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
Function.prototype.myBind = function(context){
  //这里对调用者做一个判断，如果不是函数类型，直接抛异常
  if(typeof this !== 'function'){
    throw '调用必须为函数'
  }
  //当我们调用bind函数时，我们可能传了不只一个参数
  //如 fun.bind({}, arg1, arg2)
  //我们需要把后面的参数拿出来
  let args = Array.prototype.slice.call(arguments, 1);
  let fToBind = this;
  let fNOP = function(){};
  let fBound = function(){
    // 当bind后作为一个构造函数的时候，是不用改变this的指向
    return fToBind.apply(this instanceof fNOP ? this : context, args.concat(arguments));
  }
  if(this.prototype){
    fNOP.prototype = this.prototype;
  }

  fBound.prototype = new fNOP();

  return fBound;
}
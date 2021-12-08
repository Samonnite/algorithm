// 1. 借助call
function Parent1(){
  this.name = 'parent1';
}
function Child1(){
  Parent1.call(this);
  this.type = 'child1'
}
console.log(new Child1);
/**
 * 缺点：实例并不是父类的实例，只是子类的实例
        只能继承父类的实例属性和方法，不能继承原型属性/方法
        无法实现函数复用，每个子类都有父类实例函数的副本，影响性能
 */

// 2. 借助原型链
function Parent2(){
  this.name = 'parent2';
}
function Child2(){}
Child2.prototype = new Parent2();
/**
 * 缺点：1. 要想为子类新增属性和方法，必须要在new Parent2()这样的语句之后执行，不能放到构造器中
        2. 无法实现多继承
        3. 来自原型对象的所有属性被所有实例共享
        4. 创建子类实例时，无法向父类构造函数传参
 */

//3.组合
function Parent3() {
  this.name = 'parent3';
}

function Child3() {
  Parent3.call(this);
}
Child3.prototype = Parent3.prototype;

var s3 = new Child3();
var s4 = new Child3();
console.log(s3)

// 子类实例的构造函数是Parent3，显然这是不对的，应该是Child3。

// 寄生组合继承
function Parent4() {
  this.name = 'parent4';
}

function Child4() {
  Parent4.call(this);
}

Child4.prototype = Object.create(Parent4.prototype);
Child4.prototype.constructor = Child4
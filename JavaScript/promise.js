const PENDING = "pending"
const FULFILLED = "fulfilled"
const REJECTED = "rejected"
class MyPromise {
    constructor(executor) {
        // 初始状态
        this.status = PENDING
        // 成功后的值
        this.value = undefined
        // 失败的结果
        this.reason = undefined
        // 成功后的回调函数列表
        this.successCallbacks = [];
        // 失败后的回调函数列表
        this.failCallbacks = [];

        const resolve = value => {
            // 状态一旦发生改变不会再变
            if (this.status === PENDING) {
                this.status = FULFILLED
                this.value = value
                this.successCallbacks.map(cb => cb())
            }
        }
        const reject = reason => {
            // 状态一旦发生改变不会再变
            if (this.status === PENDING) {
                this.status = REJECTED
                this.reason = reason
                this.failCallbacks.map(cb => cb())
            }
        }
        try {
            // 立即执行
            executor(resolve, reject)
        } catch (error) {
            reject(error)
        }
    }

    // then方法
    then(onFulfilled, onRejected) {
        // 先判断参数的数据类型,如果不是，需要创建函数将值传递
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value
        onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason }

        // 判断状态,如果是PENDING，则将回调函数暂存下来
        if (this.status === PENDING) {
            this.successCallbacks.push(onFulfilled)
            this.failCallbacks.push(onRejected)
        }

        if (this.status === FULFILLED) {
            onFulfilled(this.value)
        }

        if (this.status === REJECTED) {
            onRejected(this.reason)
        }
    }

    catch(onRejected) {
        return this.then(undefined, onRejected)
    }

    /**
     * 无论成功失败，都会执行finally，所以可以通过then方法拿到promise状态值
     * return this.then
     * 后面可以继续调用then方法，then方法会返回promise，达到链式调用
     * 如果finally的返回值是异步，那么需要等待异步代码结果，再执行callback，然后继续链式调用
     * return new MyPromise.resolve(callback().then(() => value) / () => {throw reason})
     * @param {*} callback 
     */
    finally(callback) {
        return this.then(value => {
            // Promise.resolve会等callback()的函数执行完再返回结果
            return new MyPromise.resolve(callback().then(() => value))
        }, reason => {
            return new MyPromise.resolve(callback().then(() => { throw reason }))
        })
    }

    static resolve = value => {
        if (value instanceof MyPromise) return value;
        return new Promise(resolve => resolve())
    }

    /**
     * 返回新的promise
     * 然后遍历数组里面的元素 为普通值直接存储结果，如果是promise对象则调用此对象获取相应结果，成功直接存储值，失败直接返回原因
     * 记录执行的索引，等所有的都执行完后再返回
     * @param {*} arr 
     */
    static all = function (arr) {
        // 执行结果数组
        let result = [];
        // 执行索引
        let index = 0;
        return new MyPromise((resolve, reject) => {
            for (let i = 0; i < arr.length; i++) {
                MyPromise.resolve(arr[i]).then(data => {
                    result[i] = data
                    if (++index === arr.length) {
                        resolve(result)
                    }
                }, reject)
            }
        })
    }

    static allSettled = function (arr) {
        return new MyPromise(resolve => {
            const data = [], len = arr.length;
            let count = len;
            for (let i = 0; i < len; i += 1) {
                const promise = MyPromise.resolve(arr[i]);
                promise.then(res => {
                    data[i] = { status: 'fulfilled', value: res };
                }, error => {
                    data[i] = { status: 'rejected', reason: error };
                }).finally(() => {
                    if (!--count) {
                        resolve(data);
                    }
                });
            }
        });
    }

    static race = function (arr) {
        return new Promise(() => {
            for (let i = 0; i < arr.length; i++) {
                arr[i].then(resolve, reject)
            }
        })
    }
}
var obj = {
    a: {
        b: {
            c: '1'
        }
    }
}


console.log(find(obj, 'a.b.c'))  // 1

// 利用eval执行
const find = (obj, str) => eval(`obj.${str}`)

// 转成数组再将自身赋值给属性
const find = (obj, str) => {
    str.split('.').forEach( item => {
        obj = obj[item]
    })
    return obj
}
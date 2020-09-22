function isPromise(obj) {
    return (typeof obj === 'function' || typeof obj === 'object') && typeof obj.then === 'function'
}

function myPromiseAll(arr) {
    let requires = []
    return new Promise((resolve, reject) => {
        arr.map((item, idx) => {
            if (isPromise(item)) {
                item.then((res) => {
                    requires[idx] = res
                    if (requires.length === arr.length) {
                        resolve(requires)
                    }
                }).catch((err) => {
                    reject(err)
                })
            } else {
                requires[idx] = item
            }
        })
    })
}

function myCloneDeep(obj) {
    if (typeof obj === 'object') {
        const temp = Array.isArray(obj) ? [] : {}

        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (typeof obj[key] === 'object') {
                    temp[key] = myCloneDeep(obj[key])
                } else {
                    temp[key] = obj[key]
                }
            }
        }
        return temp
    }
    return obj
}


let fibonacci = (function (n) {
    let cache = {}
    return function (n) {
        if (n === 1 || n === 2) return 1
        if (cache[n]) return cache[n]
        return cache[n] = fibonacci(n - 1) + fibonacci(n - 2)
    }
})()


console.log(fibonacci(6));
// 柯里化

function add() {
    let _args = [...arguments]
    let _add = function () {
        _args.push(...arguments)
        return _add
    }
    _add.toString = () => _args.reduce((total, arg) => total + arg, 0)
    return _add
}

console.log(add(1, 2, 3)(4, 5)); 




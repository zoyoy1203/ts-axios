const toString = Object.prototype.toString

// 判断参数类型
export function isData(val: any): val is Date {
    return toString.call(val) === '[object Date]'
}

export function isObject(val: any): val is Object {
    return val !== null && typeof val === 'object'
}
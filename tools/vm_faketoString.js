;(function () {
    // 针对的是Function tostring（Object toString）还需要处理
    const _toString = Function.toString
    // Symbol 生成一个全局唯一的值
    const func_toString_symbol = Symbol(Math.random().toString(36).substring(2))
    // 重新toString
    const new_toString = function () {
        // 如果是function且该对象有func_toString_symbol对应的属性则返回
        return typeof this === 'function' && this[func_toString_symbol] || _toString.call(this)
    }

    function set_native(func, key, value) {
        Object.defineProperty(func, key, {
            enumerable: false,
            configurable: true,
            writable: true,
            value: value
        })
    }

    // 删除原型上toString
    delete Function.prototype.toString
    // 重写原型上的toString
    set_native(Function.prototype, 'toString', new_toString)
    // 设置原型上toString本身调用toString时的输出
    set_native(Function.prototype.toString, func_toString_symbol, "function toString() {[native code]}")

    // 暴露出方法，调用该方法，会将该方法的toString方法通过set_native方法重写
    box.func_set_fake_toString = function (func, funcname) {
        set_native(func, func_toString_symbol, `function ${func.name || funcname || ''}() { [native code] }`)
    }
})();
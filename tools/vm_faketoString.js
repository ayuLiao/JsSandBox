;(function () {
    const _toString = Function.toString
    const func_toString_symbol = Symbol(Math.random().toString(36).substring(2))
    const new_toString = function () {
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

    delete Function.prototype.toString
    set_native(Function.prototype, 'toString', new_toString)
    set_native(Function.prototype.toString, func_toString_symbol, "function toString() {[native code]}")

    box.func_set_fake_toString = function (func, funcname) {
        set_native(func, func_toString_symbol, `function ${func.name || funcname || ''}() { [native code] }`)
    }
})();
box.rename = function rename(obj, objname){
    Object.defineProperties(obj,{
    [Symbol.toStringTag]: {
        value: objname,
        configurable: true,
        writable: false,
        enumerable: false
    }
})
}
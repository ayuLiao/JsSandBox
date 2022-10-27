// Object.defineProperty() 通过描述对象，定义对象属性
box.defineProperty = function defineProperty(obj, key, value, configurable, enumerable, writable, getter, setter){
    let attr = {
        configurable: configurable,
        enumerable: enumerable
    }
    if(value !== undefined){
        attr["value"] = value
    }
    if(writable !==undefined){
        attr["writable"] = writable
    }
    if (getter){
        attr["get"] = getter
    }
    if (setter){
        attr["set"] = setter
    }

    Object.defineProperty(obj, key, attr)
}
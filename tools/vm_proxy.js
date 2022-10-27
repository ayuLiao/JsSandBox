function ObjectHandler(name) {
    let handler = {
        get(target, property, receiver) {
            let result = Reflect.get(target, property, receiver)
            if (result instanceof Object) {
                if (typeof result === "function") {
                    console.log(`[${name}]-[get] property: [${property}] , it is function`)
                } else {
                        if (typeof(property) !== 'symbol') {
                            console.log(`[${name}]-[get] property: [${property}], result: [${result}]`);
                        }
                }
                if (property !== 'toString' && typeof(property) != 'symbol') {
                    return new Proxy(result, ObjectHandler(`${name}.${property}`))
                }
            }
            if (typeof(property) !== 'symbol') {
                console.log(`[${name}]-[get] property: [${property.description ? property.description:property}], result: [${result}]`);
            }
            return result;
        },
        set(target, property, value, receiver) {
            if (value instanceof Object) {
                console.log(`[${name}]-[set] property: [${property}], value: [${value}]`);
            } else {
                console.log(`[${name}]-[set] property: [${property}], value: [${value}]`);
            }
            return Reflect.set(target, property, value, receiver);
        },
        has(target, property) {
            var result = Reflect.has(target, property);
            console.log(`[${name}]-[has] property: [${property}], result: [${result}]`)
            return result;
        },
        deleteProperty(target, property) {
            var result = Reflect.deleteProperty(target, property);
            console.log(`[${name}]-[deleteProperty] property: [${property}], result: [${result}]`)
            return result;
        },
        //返回指定对象上一个自有属性对应的属性描述符
        getOwnPropertyDescriptor(target, property) {
            var result = Reflect.getOwnPropertyDescriptor(target, property);
            if(typeof (property) !== "symbol"){
                console.log(`[${name}]-[getOwnPropertyDescriptor]  property: [${property}], result: [${result}]`)
            }
            return result;
        },
        defineProperty(target, property, attributes) {
            var result = Reflect.defineProperty(target, property, attributes);
            console.log(`[${name}]-[defineProperty] property: [${property}], attributes: [${attributes}], result: [${result}]`)
            return result
        },
        //当读取代理对象的原型时，该方法就会被调用
        getPrototypeOf(target) {
            var result = Reflect.getPrototypeOf(target)
            console.log(`[${name}]-[getPrototypeOf] result: [${result}]`)
            return result;
        },
        setPrototypeOf(target, proto) {
            console.log(`[${name}]-[setPrototypeOf] proto: [${proto}]`)
            return Reflect.setPrototypeOf(target, proto);
        },
        preventExtensions(target) {
            console.log(`[${name}]-[preventExtensions]`)
            return Reflect.preventExtensions(target);
        },
        isExtensible(target) {
            var result = Reflect.isExtensible(target)
            console.log(`[${name}]-[isExtensible], result: [${result}]`)
            return result;
        },
        ownKeys(target) {
            var result = Reflect.ownKeys(target)
            console.log(`[${name}]-[ownkeys], result: [${result}]`)
            return result
        },
        apply(target, thisArg, argArray) {
            let result = Reflect.apply(target, thisArg, argArray)
            console.log(`[${name}]-[apply] function name: [${target.name}], argArray: [${argArray}], result: [${result}].`)
            return result
        },
        construct(target, argArray, newTarget) {
            var result = Reflect.construct(target, argArray, newTarget)
            console.log(`[${name}]-[construct] function name: [${target.name}], argArray: [${argArray}], result: [${result}].`)
            return result;
        }
    }
    return handler;
}

box.proxy = function(obj, obj_name) {
    if (box.config.proxy == false) {
        return obj
    }
    return new Proxy(obj, ObjectHandler(obj_name))
}
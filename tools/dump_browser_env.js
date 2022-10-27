function get_obj_name(obj) {
    let reg = ''
    if (typeof (obj) === 'function') {
        reg = /function (.*?)\(\)/;
    } else if (typeof (obj) === 'object') {
        reg = /\[object (.*?)\]/
    } else {
        debugger
    }

    let obj_name = reg.exec(obj + "")[1];
    return obj_name
}

function gen_func_create_code(obj) {

    let code = "";
    let obj_name = get_obj_name(obj);
    let create_error_code = "";
    let new_obj_status = false;
    try {
        new obj();
    } catch (e) {
        let msg = e.message;
        if (msg === "Illegal constructor") {
            create_error_code = `box.throwError("TypeError", "Illegal constructor") `;
        } else if (msg.includes("1 argument required, but only 0 present.")) {
            create_error_code = `console.log("need 1 argument required! call new ${obj_name} argmuents is " + arguments)`;
        } else if (msg.includes("2 arguments required, but only 0 present.")) {
            create_error_code = `console.log("need 2 argument required! call new ${obj_name} argmuents is " + arguments)`;
        } else {
            console.log(e);
            debugger;
        }
    }
    if (!create_error_code) {
        code += `${obj_name} = function ${obj_name}(){}` + '\r\n'
    } else {
        code += `${obj_name} = function ${obj_name}(){${create_error_code}}` + '\r\n'
    }

    code += `box.func_set_fake_toString(${obj_name})` + '\r\n'
    code += `box.rename(${obj_name}.prototype, "${obj_name}")` + '\r\n'

    return code;
}

function gen_set_proto_code(obj, obj_name) {
    let code = "";
    let obj_proto_name = get_obj_name(Object.getPrototypeOf(obj));
    if (obj_proto_name) {
        if (typeof (obj) === 'function') {
            obj_name = get_obj_name(obj);
            code = `Object.setPrototypeOf(${obj_name}.prototype,${obj_proto_name}.prototype)` + '\r\n'
        } else if (typeof (obj) === 'object') {
            code = `Object.setPrototypeOf(${obj_name},${obj_proto_name}.prototype)`;
            +'\r\n'
        }
    }
    return code;
}


function gen_code(obj, obj_name, obj_key, obj_desc_item, is_proto) {
    if (obj_key === 'prototype' || obj_key === 'constructor') return ''
    if (is_proto) {
        proto_str = '.prototype'
    } else {
        proto_str = ''
    }
    if (obj_desc_item['value'] !== undefined) {
        let value = obj_desc_item['value']
        let value_type = typeof (value)
        if (value_type === 'function') {
            return `box.defineProperty(${obj_name}${proto_str}, '${obj_key}', function ${obj_key}(){debugger;}, ${obj_desc_item['configurable']}, ${obj_desc_item['enumerable']}, ${obj_desc_item['writable']}); box.func_set_fake_toString(${obj_name}${proto_str}.${obj_key})`
        } else if (value_type === 'number' || value_type === 'boolean' || value_type === 'undefined') {
            return `box.defineProperty(${obj_name}${proto_str}, '${obj_key}', ${obj_desc_item["value"]}, ${obj_desc_item['configurable']}, ${obj_desc_item['enumerable']}, ${obj_desc_item['writable']});`
        } else if (value_type === 'string') {
            return `box.defineProperty(${obj_name}${proto_str}, '${obj_key}', '${obj_desc_item["value"]}', ${obj_desc_item['configurable']}, ${obj_desc_item['enumerable']}, ${obj_desc_item['writable']});`
        } else if (value_type === 'object') {
            if (value instanceof Array) {
                return `box.defineProperty(${obj_name}${proto_str}, '${obj_key}', [], ${obj_desc_item['configurable']}, ${obj_desc_item['enumerable']}, ${obj_desc_item['writable']});`
            } else if (value === null) {
                return `box.defineProperty(${obj_name}${proto_str}, '${obj_key}', null, ${obj_desc_item['configurable']}, ${obj_desc_item['enumerable']}, ${obj_desc_item['writable']});`
            } else {
                return `box.defineProperty(${obj_name}${proto_str}, '${obj_key}', {}, ${obj_desc_item['configurable']}, ${obj_desc_item['enumerable']}, ${obj_desc_item['writable']});`
            }
        } else {
            debugger
        }
    } else {

        let get_code = '';
        let set_code = '';
        if (obj_desc_item["set"]) {
            set_code = `function (value) {debugger}`
        }
        get_func_obj = obj_desc_item['get']
        if (get_func_obj) {
            // get_func_name = get_obj_name(get_func_obj)
            try {
                value = obj[obj_key]
                if (typeof (value) === 'string') {
                    value = `${value}`
                }
                get_code = `function () {debugger; return '${value}'}`
            } catch {
                get_code = `function () {debugger}`
            }
        }

        let code = `box.defineProperty(${obj_name}${proto_str}, '${obj_key}', undefined, ${obj_desc_item['configurable']}, ${obj_desc_item['enumerable']}, ${obj_desc_item['writable']}`

        if (get_code) {
            code += `, ${get_code}`
        }

        if (set_code) {
            code += `, ${set_code}`
        }

        code += `);`

        if (get_code) {
            code += `box.func_set_fake_toString(Object.getOwnPropertyDescriptors(${obj_name}${proto_str})["${obj_key}"].get, "get ${obj_key}");`
        }
        if (set_code) {
            code += `box.func_set_fake_toString(Object.getOwnPropertyDescriptors(${obj_name}${proto_str})["${obj_key}"].set, "set ${obj_key}");`
        }
        return code
    }

}


function _dump(obj, obj_name, is_proto) {
    let code = ''
    obj_desc = Object.getOwnPropertyDescriptors(obj)
    for (let obj_key in obj_desc) {
        code += gen_code(obj, obj_name, obj_key, obj_desc[obj_key], is_proto);
        code += '\r\n'
    }
    return code
}


function dump_obj(obj, obj_name) {
    let code = ''
    if (obj_name === 'window') {
        code += 'window = globalThis;' + '\r\n'
    } else {
        code += `${obj_name} = {};` + '\r\n'
    }
    code += gen_set_proto_code(obj, obj_name) + '\r\n'
    code += _dump(obj, obj_name)
    return code
}

function dump_func_obj(obj) {
    obj_name = get_obj_name(obj)
    return _dump(obj, obj_name)
}

function dump_proto_obj(obj) {
    obj_name = get_obj_name(obj.constructor)
    return _dump(obj, obj_name, true)
}

// dump browser env info.
function dump(obj, obj_name) {

    let code = ''
    if (typeof (obj) === 'object') {
        func_obj = obj.__proto__.constructor
        code += gen_func_create_code(func_obj) + '\r\n'
        code += gen_set_proto_code(func_obj) + '\r\n'
        code += dump_func_obj(func_obj) + '\r\n'
        code += dump_proto_obj(obj.__proto__) + '\r\n'
        code += dump_obj(obj, obj_name) + '\r\n'

    } else if (typeof (obj) === 'function') {
        code += gen_func_create_code(obj) + '\r\n'
        code += gen_set_proto_code(obj) + '\r\n'
        code += dump_func_obj(obj) + '\r\n'
        code += dump_proto_obj(obj.prototype) + '\r\n'
    }
    console.log(code)
}
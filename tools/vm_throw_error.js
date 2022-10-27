box.throwError = function throwError(name, message){
    let e = new Error()
    e.name = name
    e.message = message
    e.stack = `${name}: ${message}
    at snippet:///Script%20snippet%20%231:2:5`
    throw e
}
Window = function Window(){box.throwError("TypeError", "Illegal constructor") }
box.func_set_fake_toString(Window)
box.rename(Window.prototype, "Window")

Object.setPrototypeOf(Window.prototype,EventTarget.prototype)

box.defineProperty(Window, 'length', 0, true, false, false);
box.defineProperty(Window, 'name', 'Window', true, false, false);
box.defineProperty(Window, 'arguments', null, false, false, false);
box.defineProperty(Window, 'caller', null, false, false, false);

box.defineProperty(Window, 'TEMPORARY', 0, false, true, false);
box.defineProperty(Window, 'PERSISTENT', 1, false, true, false);

box.defineProperty(Window.prototype, 'TEMPORARY', 0, false, true, false);
box.defineProperty(Window.prototype, 'PERSISTENT', 1, false, true, false);


// 不直接生成window
window = globalThis
Object.setPrototypeOf(window, Window.prototype)
box.defineProperty(window, 'atob', function atob(str) {
    return box.base64.base64decode(str)
}, true, true, true);
box.func_set_fake_toString(window.atob)
box.defineProperty(window, 'btoa', function btoa(str) {
    return box.base64.base64encode(str)
}, true, true, true);
box.func_set_fake_toString(window.btoa)

delete window.global
box.defineProperty(window, 'alert', function alert(){debugger;}, true, true, true); box.func_set_fake_toString(window.alert)

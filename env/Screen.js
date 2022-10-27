Screen = function Screen(){box.throwError("TypeError", "Illegal constructor") }
box.func_set_fake_toString(Screen)
box.rename(Screen.prototype, "Screen")

Object.setPrototypeOf(Screen.prototype,EventTarget.prototype)

box.defineProperty(Screen, 'length', 0, true, false, false);
box.defineProperty(Screen, 'name', 'Screen', true, false, false);
box.defineProperty(Screen, 'arguments', null, false, false, false);
box.defineProperty(Screen, 'caller', null, false, false, false);


box.defineProperty(Screen.prototype, 'availWidth', undefined, true, true, undefined, function () {debugger});box.func_set_fake_toString(Object.getOwnPropertyDescriptors(Screen.prototype)["availWidth"].get, "get availWidth");
box.defineProperty(Screen.prototype, 'availHeight', undefined, true, true, undefined, function () {debugger});box.func_set_fake_toString(Object.getOwnPropertyDescriptors(Screen.prototype)["availHeight"].get, "get availHeight");
box.defineProperty(Screen.prototype, 'width', undefined, true, true, undefined, function () {debugger});box.func_set_fake_toString(Object.getOwnPropertyDescriptors(Screen.prototype)["width"].get, "get width");
box.defineProperty(Screen.prototype, 'height', undefined, true, true, undefined, function () {debugger});box.func_set_fake_toString(Object.getOwnPropertyDescriptors(Screen.prototype)["height"].get, "get height");
box.defineProperty(Screen.prototype, 'colorDepth', undefined, true, true, undefined, function () {debugger});box.func_set_fake_toString(Object.getOwnPropertyDescriptors(Screen.prototype)["colorDepth"].get, "get colorDepth");
box.defineProperty(Screen.prototype, 'pixelDepth', undefined, true, true, undefined, function () {debugger});box.func_set_fake_toString(Object.getOwnPropertyDescriptors(Screen.prototype)["pixelDepth"].get, "get pixelDepth");
box.defineProperty(Screen.prototype, 'availLeft', undefined, true, true, undefined, function () {debugger});box.func_set_fake_toString(Object.getOwnPropertyDescriptors(Screen.prototype)["availLeft"].get, "get availLeft");
box.defineProperty(Screen.prototype, 'availTop', undefined, true, true, undefined, function () {debugger});box.func_set_fake_toString(Object.getOwnPropertyDescriptors(Screen.prototype)["availTop"].get, "get availTop");
box.defineProperty(Screen.prototype, 'orientation', undefined, true, true, undefined, function () {debugger});box.func_set_fake_toString(Object.getOwnPropertyDescriptors(Screen.prototype)["orientation"].get, "get orientation");

box.defineProperty(Screen.prototype, 'onchange', undefined, true, true, undefined, function () {debugger}, function (value) {debugger});box.func_set_fake_toString(Object.getOwnPropertyDescriptors(Screen.prototype)["onchange"].get, "get onchange");box.func_set_fake_toString(Object.getOwnPropertyDescriptors(Screen.prototype)["onchange"].set, "set onchange");
box.defineProperty(Screen.prototype, 'isExtended', undefined, true, true, undefined, function () {debugger});box.func_set_fake_toString(Object.getOwnPropertyDescriptors(Screen.prototype)["isExtended"].get, "get isExtended");

screen = {};
Object.setPrototypeOf(screen,Screen.prototype)
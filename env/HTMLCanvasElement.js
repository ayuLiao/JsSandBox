HTMLCanvasElement = function HTMLCanvasElement(){box.throwError("TypeError", "Illegal constructor") }
box.func_set_fake_toString(HTMLCanvasElement)
box.rename(HTMLCanvasElement.prototype, "HTMLCanvasElement")

Object.setPrototypeOf(HTMLCanvasElement.prototype,HTMLElement.prototype)

box.defineProperty(HTMLCanvasElement, 'length', 0, true, false, false);
box.defineProperty(HTMLCanvasElement, 'name', 'HTMLCanvasElement', true, false, false);
box.defineProperty(HTMLCanvasElement, 'arguments', null, false, false, false);
box.defineProperty(HTMLCanvasElement, 'caller', null, false, false, false);


box.defineProperty(HTMLCanvasElement.prototype, 'width', undefined, true, true, undefined, function () {debugger}, function (value) {debugger});box.func_set_fake_toString(Object.getOwnPropertyDescriptors(HTMLCanvasElement.prototype)["width"].get, "get width");box.func_set_fake_toString(Object.getOwnPropertyDescriptors(HTMLCanvasElement.prototype)["width"].set, "set width");
box.defineProperty(HTMLCanvasElement.prototype, 'height', undefined, true, true, undefined, function () {debugger}, function (value) {debugger});box.func_set_fake_toString(Object.getOwnPropertyDescriptors(HTMLCanvasElement.prototype)["height"].get, "get height");box.func_set_fake_toString(Object.getOwnPropertyDescriptors(HTMLCanvasElement.prototype)["height"].set, "set height");
box.defineProperty(HTMLCanvasElement.prototype, 'captureStream', function captureStream(){debugger;}, true, true, true); box.func_set_fake_toString(HTMLCanvasElement.prototype.captureStream)
box.defineProperty(HTMLCanvasElement.prototype, 'getContext', function getContext(){
    let context = {}
    if(arguments[0] === '2d') {
        Object.setPrototypeOf(context, CanvasRenderingContext2D.prototype)
        return context
    }
    debugger;
}, true, true, true); box.func_set_fake_toString(HTMLCanvasElement.prototype.getContext)
box.defineProperty(HTMLCanvasElement.prototype, 'toBlob', function toBlob(){debugger;}, true, true, true); box.func_set_fake_toString(HTMLCanvasElement.prototype.toBlob)
box.defineProperty(HTMLCanvasElement.prototype, 'toDataURL', function toDataURL(){debugger;}, true, true, true); box.func_set_fake_toString(HTMLCanvasElement.prototype.toDataURL)
box.defineProperty(HTMLCanvasElement.prototype, 'transferControlToOffscreen', function transferControlToOffscreen(){debugger;}, true, true, true); box.func_set_fake_toString(HTMLCanvasElement.prototype.transferControlToOffscreen)


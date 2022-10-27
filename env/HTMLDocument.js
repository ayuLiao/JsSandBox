HTMLDocument = function HTMLDocument(){box.throwError("TypeError", "Illegal constructor") }
box.func_set_fake_toString(HTMLDocument)
box.rename(HTMLDocument.prototype, "HTMLDocument")

Object.setPrototypeOf(HTMLDocument.prototype,Document.prototype)

box.defineProperty(HTMLDocument, 'length', 0, true, false, false);
box.defineProperty(HTMLDocument, 'name', 'HTMLDocument', true, false, false);
box.defineProperty(HTMLDocument, 'arguments', null, false, false, false);
box.defineProperty(HTMLDocument, 'caller', null, false, false, false);




document = {};
Object.setPrototypeOf(document,HTMLDocument.prototype)
box.defineProperty(document, 'location', undefined, false, true, undefined, function () {debugger; return 'https://www.zhihu.com/search?type=content&q=python'}, function (value) {debugger});box.func_set_fake_toString(Object.getOwnPropertyDescriptors(document)["location"].get, "get location");box.func_set_fake_toString(Object.getOwnPropertyDescriptors(document)["location"].set, "set location");
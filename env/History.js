History = function History(){box.throwError("TypeError", "Illegal constructor") }
box.func_set_fake_toString(History)
box.rename(History.prototype, "History")


box.defineProperty(History, 'length', 0, true, false, false);
box.defineProperty(History, 'name', 'History', true, false, false);
box.defineProperty(History, 'arguments', null, false, false, false);
box.defineProperty(History, 'caller', null, false, false, false);


box.defineProperty(History.prototype, 'length', undefined, true, true, undefined, function () {debugger});box.func_set_fake_toString(Object.getOwnPropertyDescriptors(History.prototype)["length"].get, "get length");
box.defineProperty(History.prototype, 'scrollRestoration', undefined, true, true, undefined, function () {debugger}, function (value) {debugger});box.func_set_fake_toString(Object.getOwnPropertyDescriptors(History.prototype)["scrollRestoration"].get, "get scrollRestoration");box.func_set_fake_toString(Object.getOwnPropertyDescriptors(History.prototype)["scrollRestoration"].set, "set scrollRestoration");
box.defineProperty(History.prototype, 'state', undefined, true, true, undefined, function () {debugger});box.func_set_fake_toString(Object.getOwnPropertyDescriptors(History.prototype)["state"].get, "get state");
box.defineProperty(History.prototype, 'back', function back(){debugger;}, true, true, true); box.func_set_fake_toString(History.prototype.back)
box.defineProperty(History.prototype, 'forward', function forward(){debugger;}, true, true, true); box.func_set_fake_toString(History.prototype.forward)
box.defineProperty(History.prototype, 'go', function go(){debugger;}, true, true, true); box.func_set_fake_toString(History.prototype.go)
box.defineProperty(History.prototype, 'pushState', function pushState(){debugger;}, true, true, true); box.func_set_fake_toString(History.prototype.pushState)
box.defineProperty(History.prototype, 'replaceState', function replaceState(){debugger;}, true, true, true); box.func_set_fake_toString(History.prototype.replaceState)


history = {};
Object.setPrototypeOf(history,History.prototype)
box.defineProperty(history, 'pushState', function pushState(){debugger;}, true, true, true); box.func_set_fake_toString(history.pushState)
box.defineProperty(history, 'replaceState', function replaceState(){debugger;}, true, true, true); box.func_set_fake_toString(history.replaceState)
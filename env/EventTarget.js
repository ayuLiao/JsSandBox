EventTarget = function EventTarget(){}
box.func_set_fake_toString(EventTarget)
box.rename(EventTarget.prototype, "EventTarget")


box.defineProperty(EventTarget, 'length', 0, true, false, false);
box.defineProperty(EventTarget, 'name', 'EventTarget', true, false, false);
box.defineProperty(EventTarget, 'arguments', null, false, false, false);
box.defineProperty(EventTarget, 'caller', null, false, false, false);


box.defineProperty(EventTarget.prototype, 'addEventListener', function addEventListener(){debugger;}, true, true, true); box.func_set_fake_toString(EventTarget.prototype.addEventListener)
box.defineProperty(EventTarget.prototype, 'dispatchEvent', function dispatchEvent(){debugger;}, true, true, true); box.func_set_fake_toString(EventTarget.prototype.dispatchEvent)
box.defineProperty(EventTarget.prototype, 'removeEventListener', function removeEventListener(){debugger;}, true, true, true); box.func_set_fake_toString(EventTarget.prototype.removeEventListener)
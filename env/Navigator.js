Navigator = function Navigator(){box.throwError("TypeError", "Illegal constructor") }
box.func_set_fake_toString(Navigator)
box.rename(Navigator.prototype, "Navigator")


box.defineProperty(Navigator, 'length', 0, true, false, false);
box.defineProperty(Navigator, 'name', 'Navigator', true, false, false);
box.defineProperty(Navigator, 'arguments', null, false, false, false);
box.defineProperty(Navigator, 'caller', null, false, false, false);


box.defineProperty(Navigator.prototype, 'vendorSub', undefined, true, true, undefined, function () {debugger});box.func_set_fake_toString(Object.getOwnPropertyDescriptors(Navigator.prototype)["vendorSub"].get, "get vendorSub");
box.defineProperty(Navigator.prototype, 'productSub', undefined, true, true, undefined, function () {debugger});box.func_set_fake_toString(Object.getOwnPropertyDescriptors(Navigator.prototype)["productSub"].get, "get productSub");
box.defineProperty(Navigator.prototype, 'vendor', undefined, true, true, undefined, function () {debugger});box.func_set_fake_toString(Object.getOwnPropertyDescriptors(Navigator.prototype)["vendor"].get, "get vendor");
box.defineProperty(Navigator.prototype, 'maxTouchPoints', undefined, true, true, undefined, function () {debugger});box.func_set_fake_toString(Object.getOwnPropertyDescriptors(Navigator.prototype)["maxTouchPoints"].get, "get maxTouchPoints");
box.defineProperty(Navigator.prototype, 'scheduling', undefined, true, true, undefined, function () {debugger});box.func_set_fake_toString(Object.getOwnPropertyDescriptors(Navigator.prototype)["scheduling"].get, "get scheduling");
box.defineProperty(Navigator.prototype, 'userActivation', undefined, true, true, undefined, function () {debugger});box.func_set_fake_toString(Object.getOwnPropertyDescriptors(Navigator.prototype)["userActivation"].get, "get userActivation");
box.defineProperty(Navigator.prototype, 'doNotTrack', undefined, true, true, undefined, function () {debugger});box.func_set_fake_toString(Object.getOwnPropertyDescriptors(Navigator.prototype)["doNotTrack"].get, "get doNotTrack");
box.defineProperty(Navigator.prototype, 'geolocation', undefined, true, true, undefined, function () {debugger});box.func_set_fake_toString(Object.getOwnPropertyDescriptors(Navigator.prototype)["geolocation"].get, "get geolocation");
box.defineProperty(Navigator.prototype, 'connection', undefined, true, true, undefined, function () {debugger});box.func_set_fake_toString(Object.getOwnPropertyDescriptors(Navigator.prototype)["connection"].get, "get connection");
box.defineProperty(Navigator.prototype, 'plugins', undefined, true, true, undefined, function () {debugger});box.func_set_fake_toString(Object.getOwnPropertyDescriptors(Navigator.prototype)["plugins"].get, "get plugins");
box.defineProperty(Navigator.prototype, 'mimeTypes', undefined, true, true, undefined, function () {debugger});box.func_set_fake_toString(Object.getOwnPropertyDescriptors(Navigator.prototype)["mimeTypes"].get, "get mimeTypes");
box.defineProperty(Navigator.prototype, 'pdfViewerEnabled', undefined, true, true, undefined, function () {debugger});box.func_set_fake_toString(Object.getOwnPropertyDescriptors(Navigator.prototype)["pdfViewerEnabled"].get, "get pdfViewerEnabled");
box.defineProperty(Navigator.prototype, 'webkitTemporaryStorage', undefined, true, true, undefined, function () {debugger});box.func_set_fake_toString(Object.getOwnPropertyDescriptors(Navigator.prototype)["webkitTemporaryStorage"].get, "get webkitTemporaryStorage");
box.defineProperty(Navigator.prototype, 'webkitPersistentStorage', undefined, true, true, undefined, function () {debugger});box.func_set_fake_toString(Object.getOwnPropertyDescriptors(Navigator.prototype)["webkitPersistentStorage"].get, "get webkitPersistentStorage");
box.defineProperty(Navigator.prototype, 'hardwareConcurrency', undefined, true, true, undefined, function () {debugger});box.func_set_fake_toString(Object.getOwnPropertyDescriptors(Navigator.prototype)["hardwareConcurrency"].get, "get hardwareConcurrency");
box.defineProperty(Navigator.prototype, 'cookieEnabled', undefined, true, true, undefined, function () {debugger});box.func_set_fake_toString(Object.getOwnPropertyDescriptors(Navigator.prototype)["cookieEnabled"].get, "get cookieEnabled");
box.defineProperty(Navigator.prototype, 'appCodeName', undefined, true, true, undefined, function () {debugger});box.func_set_fake_toString(Object.getOwnPropertyDescriptors(Navigator.prototype)["appCodeName"].get, "get appCodeName");
box.defineProperty(Navigator.prototype, 'appName', undefined, true, true, undefined, function () {debugger});box.func_set_fake_toString(Object.getOwnPropertyDescriptors(Navigator.prototype)["appName"].get, "get appName");
box.defineProperty(Navigator.prototype, 'appVersion', undefined, true, true, undefined, function () {debugger});box.func_set_fake_toString(Object.getOwnPropertyDescriptors(Navigator.prototype)["appVersion"].get, "get appVersion");
box.defineProperty(Navigator.prototype, 'platform', undefined, true, true, undefined, function () {debugger});box.func_set_fake_toString(Object.getOwnPropertyDescriptors(Navigator.prototype)["platform"].get, "get platform");
box.defineProperty(Navigator.prototype, 'product', undefined, true, true, undefined, function () {debugger});box.func_set_fake_toString(Object.getOwnPropertyDescriptors(Navigator.prototype)["product"].get, "get product");
box.defineProperty(Navigator.prototype, 'userAgent', undefined, true, true, undefined, function () {
    return "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36"
});box.func_set_fake_toString(Object.getOwnPropertyDescriptors(Navigator.prototype)["userAgent"].get, "get userAgent");
box.defineProperty(Navigator.prototype, 'language', undefined, true, true, undefined, function () {debugger});box.func_set_fake_toString(Object.getOwnPropertyDescriptors(Navigator.prototype)["language"].get, "get language");
box.defineProperty(Navigator.prototype, 'languages', undefined, true, true, undefined, function () {debugger});box.func_set_fake_toString(Object.getOwnPropertyDescriptors(Navigator.prototype)["languages"].get, "get languages");
box.defineProperty(Navigator.prototype, 'onLine', undefined, true, true, undefined, function () {debugger});box.func_set_fake_toString(Object.getOwnPropertyDescriptors(Navigator.prototype)["onLine"].get, "get onLine");
box.defineProperty(Navigator.prototype, 'webdriver', undefined, true, true, undefined, function () {
    return false
});box.func_set_fake_toString(Object.getOwnPropertyDescriptors(Navigator.prototype)["webdriver"].get, "get webdriver");
box.defineProperty(Navigator.prototype, 'getGamepads', function getGamepads(){debugger;}, true, true, true); box.func_set_fake_toString(Navigator.prototype.getGamepads)
box.defineProperty(Navigator.prototype, 'javaEnabled', function javaEnabled(){debugger;}, true, true, true); box.func_set_fake_toString(Navigator.prototype.javaEnabled)
box.defineProperty(Navigator.prototype, 'sendBeacon', function sendBeacon(){debugger;}, true, true, true); box.func_set_fake_toString(Navigator.prototype.sendBeacon)
box.defineProperty(Navigator.prototype, 'vibrate', function vibrate(){debugger;}, true, true, true); box.func_set_fake_toString(Navigator.prototype.vibrate)

box.defineProperty(Navigator.prototype, 'bluetooth', undefined, true, true, undefined, function () {debugger});box.func_set_fake_toString(Object.getOwnPropertyDescriptors(Navigator.prototype)["bluetooth"].get, "get bluetooth");
box.defineProperty(Navigator.prototype, 'clipboard', undefined, true, true, undefined, function () {debugger});box.func_set_fake_toString(Object.getOwnPropertyDescriptors(Navigator.prototype)["clipboard"].get, "get clipboard");
box.defineProperty(Navigator.prototype, 'credentials', undefined, true, true, undefined, function () {debugger});box.func_set_fake_toString(Object.getOwnPropertyDescriptors(Navigator.prototype)["credentials"].get, "get credentials");
box.defineProperty(Navigator.prototype, 'keyboard', undefined, true, true, undefined, function () {debugger});box.func_set_fake_toString(Object.getOwnPropertyDescriptors(Navigator.prototype)["keyboard"].get, "get keyboard");
box.defineProperty(Navigator.prototype, 'managed', undefined, true, true, undefined, function () {debugger});box.func_set_fake_toString(Object.getOwnPropertyDescriptors(Navigator.prototype)["managed"].get, "get managed");
box.defineProperty(Navigator.prototype, 'mediaDevices', undefined, true, true, undefined, function () {debugger});box.func_set_fake_toString(Object.getOwnPropertyDescriptors(Navigator.prototype)["mediaDevices"].get, "get mediaDevices");
box.defineProperty(Navigator.prototype, 'storage', undefined, true, true, undefined, function () {debugger});box.func_set_fake_toString(Object.getOwnPropertyDescriptors(Navigator.prototype)["storage"].get, "get storage");
box.defineProperty(Navigator.prototype, 'serviceWorker', undefined, true, true, undefined, function () {debugger});box.func_set_fake_toString(Object.getOwnPropertyDescriptors(Navigator.prototype)["serviceWorker"].get, "get serviceWorker");
box.defineProperty(Navigator.prototype, 'virtualKeyboard', undefined, true, true, undefined, function () {debugger});box.func_set_fake_toString(Object.getOwnPropertyDescriptors(Navigator.prototype)["virtualKeyboard"].get, "get virtualKeyboard");
box.defineProperty(Navigator.prototype, 'wakeLock', undefined, true, true, undefined, function () {debugger});box.func_set_fake_toString(Object.getOwnPropertyDescriptors(Navigator.prototype)["wakeLock"].get, "get wakeLock");
box.defineProperty(Navigator.prototype, 'deviceMemory', undefined, true, true, undefined, function () {debugger});box.func_set_fake_toString(Object.getOwnPropertyDescriptors(Navigator.prototype)["deviceMemory"].get, "get deviceMemory");
box.defineProperty(Navigator.prototype, 'ink', undefined, true, true, undefined, function () {debugger});box.func_set_fake_toString(Object.getOwnPropertyDescriptors(Navigator.prototype)["ink"].get, "get ink");
box.defineProperty(Navigator.prototype, 'hid', undefined, true, true, undefined, function () {debugger});box.func_set_fake_toString(Object.getOwnPropertyDescriptors(Navigator.prototype)["hid"].get, "get hid");
box.defineProperty(Navigator.prototype, 'locks', undefined, true, true, undefined, function () {debugger});box.func_set_fake_toString(Object.getOwnPropertyDescriptors(Navigator.prototype)["locks"].get, "get locks");
box.defineProperty(Navigator.prototype, 'mediaCapabilities', undefined, true, true, undefined, function () {debugger});box.func_set_fake_toString(Object.getOwnPropertyDescriptors(Navigator.prototype)["mediaCapabilities"].get, "get mediaCapabilities");
box.defineProperty(Navigator.prototype, 'mediaSession', undefined, true, true, undefined, function () {debugger});box.func_set_fake_toString(Object.getOwnPropertyDescriptors(Navigator.prototype)["mediaSession"].get, "get mediaSession");
box.defineProperty(Navigator.prototype, 'permissions', undefined, true, true, undefined, function () {debugger});box.func_set_fake_toString(Object.getOwnPropertyDescriptors(Navigator.prototype)["permissions"].get, "get permissions");
box.defineProperty(Navigator.prototype, 'presentation', undefined, true, true, undefined, function () {debugger});box.func_set_fake_toString(Object.getOwnPropertyDescriptors(Navigator.prototype)["presentation"].get, "get presentation");
box.defineProperty(Navigator.prototype, 'serial', undefined, true, true, undefined, function () {debugger});box.func_set_fake_toString(Object.getOwnPropertyDescriptors(Navigator.prototype)["serial"].get, "get serial");
box.defineProperty(Navigator.prototype, 'usb', undefined, true, true, undefined, function () {debugger});box.func_set_fake_toString(Object.getOwnPropertyDescriptors(Navigator.prototype)["usb"].get, "get usb");
box.defineProperty(Navigator.prototype, 'windowControlsOverlay', undefined, true, true, undefined, function () {debugger});box.func_set_fake_toString(Object.getOwnPropertyDescriptors(Navigator.prototype)["windowControlsOverlay"].get, "get windowControlsOverlay");
box.defineProperty(Navigator.prototype, 'xr', undefined, true, true, undefined, function () {debugger});box.func_set_fake_toString(Object.getOwnPropertyDescriptors(Navigator.prototype)["xr"].get, "get xr");
box.defineProperty(Navigator.prototype, 'userAgentData', undefined, true, true, undefined, function () {debugger});box.func_set_fake_toString(Object.getOwnPropertyDescriptors(Navigator.prototype)["userAgentData"].get, "get userAgentData");
box.defineProperty(Navigator.prototype, 'canShare', function canShare(){debugger;}, true, true, true); box.func_set_fake_toString(Navigator.prototype.canShare)
box.defineProperty(Navigator.prototype, 'share', function share(){debugger;}, true, true, true); box.func_set_fake_toString(Navigator.prototype.share)
box.defineProperty(Navigator.prototype, 'clearAppBadge', function clearAppBadge(){debugger;}, true, true, true); box.func_set_fake_toString(Navigator.prototype.clearAppBadge)
box.defineProperty(Navigator.prototype, 'getUserMedia', function getUserMedia(){debugger;}, true, true, true); box.func_set_fake_toString(Navigator.prototype.getUserMedia)
box.defineProperty(Navigator.prototype, 'requestMIDIAccess', function requestMIDIAccess(){debugger;}, true, true, true); box.func_set_fake_toString(Navigator.prototype.requestMIDIAccess)
box.defineProperty(Navigator.prototype, 'requestMediaKeySystemAccess', function requestMediaKeySystemAccess(){debugger;}, true, true, true); box.func_set_fake_toString(Navigator.prototype.requestMediaKeySystemAccess)
box.defineProperty(Navigator.prototype, 'setAppBadge', function setAppBadge(){debugger;}, true, true, true); box.func_set_fake_toString(Navigator.prototype.setAppBadge)
box.defineProperty(Navigator.prototype, 'webkitGetUserMedia', function webkitGetUserMedia(){debugger;}, true, true, true); box.func_set_fake_toString(Navigator.prototype.webkitGetUserMedia)
box.defineProperty(Navigator.prototype, 'getBattery', function getBattery(){debugger;}, true, true, true); box.func_set_fake_toString(Navigator.prototype.getBattery)
box.defineProperty(Navigator.prototype, 'getInstalledRelatedApps', function getInstalledRelatedApps(){debugger;}, true, true, true); box.func_set_fake_toString(Navigator.prototype.getInstalledRelatedApps)
box.defineProperty(Navigator.prototype, 'registerProtocolHandler', function registerProtocolHandler(){debugger;}, true, true, true); box.func_set_fake_toString(Navigator.prototype.registerProtocolHandler)
box.defineProperty(Navigator.prototype, 'unregisterProtocolHandler', function unregisterProtocolHandler(){debugger;}, true, true, true); box.func_set_fake_toString(Navigator.prototype.unregisterProtocolHandler)

navigator = {};
Object.setPrototypeOf(navigator,Navigator.prototype)


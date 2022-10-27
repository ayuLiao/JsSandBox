Location = function Location(){box.throwError("TypeError", "Illegal constructor") }
box.func_set_fake_toString(Location)
box.rename(Location.prototype, "Location")


box.defineProperty(Location, 'length', 0, true, false, false);
box.defineProperty(Location, 'name', 'Location', true, false, false);
box.defineProperty(Location, 'arguments', null, false, false, false);
box.defineProperty(Location, 'caller', null, false, false, false);




location = {};
Object.setPrototypeOf(location,Location.prototype)
box.defineProperty(location, 'valueOf', function valueOf(){debugger;}, false, false, false); box.func_set_fake_toString(location.valueOf)
box.defineProperty(location, 'ancestorOrigins', undefined, false, true, undefined, function () {debugger; return '[object DOMStringList]'});box.func_set_fake_toString(Object.getOwnPropertyDescriptors(location)["ancestorOrigins"].get, "get ancestorOrigins");
box.defineProperty(location, 'href', undefined, false, true, undefined, function () {debugger; return 'https://www.zhihu.com/search?type=content&q=python'}, function (value) {debugger});box.func_set_fake_toString(Object.getOwnPropertyDescriptors(location)["href"].get, "get href");box.func_set_fake_toString(Object.getOwnPropertyDescriptors(location)["href"].set, "set href");
box.defineProperty(location, 'origin', undefined, false, true, undefined, function () {debugger; return 'https://www.zhihu.com'});box.func_set_fake_toString(Object.getOwnPropertyDescriptors(location)["origin"].get, "get origin");
box.defineProperty(location, 'protocol', undefined, false, true, undefined, function () {debugger; return 'https:'}, function (value) {debugger});box.func_set_fake_toString(Object.getOwnPropertyDescriptors(location)["protocol"].get, "get protocol");box.func_set_fake_toString(Object.getOwnPropertyDescriptors(location)["protocol"].set, "set protocol");
box.defineProperty(location, 'host', undefined, false, true, undefined, function () {debugger; return 'www.zhihu.com'}, function (value) {debugger});box.func_set_fake_toString(Object.getOwnPropertyDescriptors(location)["host"].get, "get host");box.func_set_fake_toString(Object.getOwnPropertyDescriptors(location)["host"].set, "set host");
box.defineProperty(location, 'hostname', undefined, false, true, undefined, function () {debugger; return 'www.zhihu.com'}, function (value) {debugger});box.func_set_fake_toString(Object.getOwnPropertyDescriptors(location)["hostname"].get, "get hostname");box.func_set_fake_toString(Object.getOwnPropertyDescriptors(location)["hostname"].set, "set hostname");
box.defineProperty(location, 'port', undefined, false, true, undefined, function () {debugger; return ''}, function (value) {debugger});box.func_set_fake_toString(Object.getOwnPropertyDescriptors(location)["port"].get, "get port");box.func_set_fake_toString(Object.getOwnPropertyDescriptors(location)["port"].set, "set port");
box.defineProperty(location, 'pathname', undefined, false, true, undefined, function () {debugger; return '/search'}, function (value) {debugger});box.func_set_fake_toString(Object.getOwnPropertyDescriptors(location)["pathname"].get, "get pathname");box.func_set_fake_toString(Object.getOwnPropertyDescriptors(location)["pathname"].set, "set pathname");
box.defineProperty(location, 'search', undefined, false, true, undefined, function () {debugger; return '?type=content&q=python'}, function (value) {debugger});box.func_set_fake_toString(Object.getOwnPropertyDescriptors(location)["search"].get, "get search");box.func_set_fake_toString(Object.getOwnPropertyDescriptors(location)["search"].set, "set search");
box.defineProperty(location, 'hash', undefined, false, true, undefined, function () {debugger; return ''}, function (value) {debugger});box.func_set_fake_toString(Object.getOwnPropertyDescriptors(location)["hash"].get, "get hash");box.func_set_fake_toString(Object.getOwnPropertyDescriptors(location)["hash"].set, "set hash");
box.defineProperty(location, 'assign', function assign(){debugger;}, false, true, false); box.func_set_fake_toString(location.assign)
box.defineProperty(location, 'reload', function reload(){debugger;}, false, true, false); box.func_set_fake_toString(location.reload)
box.defineProperty(location, 'replace', function replace(){debugger;}, false, true, false); box.func_set_fake_toString(location.replace)
box.defineProperty(location, 'toString', function toString(){
    return 'https://www.zhihu.com/search?type=content&q=python'
}, false, true, false); box.func_set_fake_toString(location.toString)
Node = function Node(){box.throwError("TypeError", "Illegal constructor") }
box.func_set_fake_toString(Node)
box.rename(Node.prototype, "Node")

Object.setPrototypeOf(Node.prototype,EventTarget.prototype)

box.defineProperty(Node, 'length', 0, true, false, false);
box.defineProperty(Node, 'name', 'Node', true, false, false);
box.defineProperty(Node, 'arguments', null, false, false, false);
box.defineProperty(Node, 'caller', null, false, false, false);

box.defineProperty(Node, 'ELEMENT_NODE', 1, false, true, false);
box.defineProperty(Node, 'ATTRIBUTE_NODE', 2, false, true, false);
box.defineProperty(Node, 'TEXT_NODE', 3, false, true, false);
box.defineProperty(Node, 'CDATA_SECTION_NODE', 4, false, true, false);
box.defineProperty(Node, 'ENTITY_REFERENCE_NODE', 5, false, true, false);
box.defineProperty(Node, 'ENTITY_NODE', 6, false, true, false);
box.defineProperty(Node, 'PROCESSING_INSTRUCTION_NODE', 7, false, true, false);
box.defineProperty(Node, 'COMMENT_NODE', 8, false, true, false);
box.defineProperty(Node, 'DOCUMENT_NODE', 9, false, true, false);
box.defineProperty(Node, 'DOCUMENT_TYPE_NODE', 10, false, true, false);
box.defineProperty(Node, 'DOCUMENT_FRAGMENT_NODE', 11, false, true, false);
box.defineProperty(Node, 'NOTATION_NODE', 12, false, true, false);
box.defineProperty(Node, 'DOCUMENT_POSITION_DISCONNECTED', 1, false, true, false);
box.defineProperty(Node, 'DOCUMENT_POSITION_PRECEDING', 2, false, true, false);
box.defineProperty(Node, 'DOCUMENT_POSITION_FOLLOWING', 4, false, true, false);
box.defineProperty(Node, 'DOCUMENT_POSITION_CONTAINS', 8, false, true, false);
box.defineProperty(Node, 'DOCUMENT_POSITION_CONTAINED_BY', 16, false, true, false);
box.defineProperty(Node, 'DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC', 32, false, true, false);

box.defineProperty(Node.prototype, 'nodeType', undefined, true, true, undefined, function () {debugger});box.func_set_fake_toString(Object.getOwnPropertyDescriptors(Node.prototype)["nodeType"].get, "get nodeType");
box.defineProperty(Node.prototype, 'nodeName', undefined, true, true, undefined, function () {debugger});box.func_set_fake_toString(Object.getOwnPropertyDescriptors(Node.prototype)["nodeName"].get, "get nodeName");
box.defineProperty(Node.prototype, 'baseURI', undefined, true, true, undefined, function () {debugger});box.func_set_fake_toString(Object.getOwnPropertyDescriptors(Node.prototype)["baseURI"].get, "get baseURI");
box.defineProperty(Node.prototype, 'isConnected', undefined, true, true, undefined, function () {debugger});box.func_set_fake_toString(Object.getOwnPropertyDescriptors(Node.prototype)["isConnected"].get, "get isConnected");
box.defineProperty(Node.prototype, 'ownerDocument', undefined, true, true, undefined, function () {debugger});box.func_set_fake_toString(Object.getOwnPropertyDescriptors(Node.prototype)["ownerDocument"].get, "get ownerDocument");
box.defineProperty(Node.prototype, 'parentNode', undefined, true, true, undefined, function () {debugger});box.func_set_fake_toString(Object.getOwnPropertyDescriptors(Node.prototype)["parentNode"].get, "get parentNode");
box.defineProperty(Node.prototype, 'parentElement', undefined, true, true, undefined, function () {debugger});box.func_set_fake_toString(Object.getOwnPropertyDescriptors(Node.prototype)["parentElement"].get, "get parentElement");
box.defineProperty(Node.prototype, 'childNodes', undefined, true, true, undefined, function () {debugger});box.func_set_fake_toString(Object.getOwnPropertyDescriptors(Node.prototype)["childNodes"].get, "get childNodes");
box.defineProperty(Node.prototype, 'firstChild', undefined, true, true, undefined, function () {debugger});box.func_set_fake_toString(Object.getOwnPropertyDescriptors(Node.prototype)["firstChild"].get, "get firstChild");
box.defineProperty(Node.prototype, 'lastChild', undefined, true, true, undefined, function () {debugger});box.func_set_fake_toString(Object.getOwnPropertyDescriptors(Node.prototype)["lastChild"].get, "get lastChild");
box.defineProperty(Node.prototype, 'previousSibling', undefined, true, true, undefined, function () {debugger});box.func_set_fake_toString(Object.getOwnPropertyDescriptors(Node.prototype)["previousSibling"].get, "get previousSibling");
box.defineProperty(Node.prototype, 'nextSibling', undefined, true, true, undefined, function () {debugger});box.func_set_fake_toString(Object.getOwnPropertyDescriptors(Node.prototype)["nextSibling"].get, "get nextSibling");
box.defineProperty(Node.prototype, 'nodeValue', undefined, true, true, undefined, function () {debugger}, function (value) {debugger});box.func_set_fake_toString(Object.getOwnPropertyDescriptors(Node.prototype)["nodeValue"].get, "get nodeValue");box.func_set_fake_toString(Object.getOwnPropertyDescriptors(Node.prototype)["nodeValue"].set, "set nodeValue");
box.defineProperty(Node.prototype, 'textContent', undefined, true, true, undefined, function () {debugger}, function (value) {debugger});box.func_set_fake_toString(Object.getOwnPropertyDescriptors(Node.prototype)["textContent"].get, "get textContent");box.func_set_fake_toString(Object.getOwnPropertyDescriptors(Node.prototype)["textContent"].set, "set textContent");
box.defineProperty(Node.prototype, 'ELEMENT_NODE', 1, false, true, false);
box.defineProperty(Node.prototype, 'ATTRIBUTE_NODE', 2, false, true, false);
box.defineProperty(Node.prototype, 'TEXT_NODE', 3, false, true, false);
box.defineProperty(Node.prototype, 'CDATA_SECTION_NODE', 4, false, true, false);
box.defineProperty(Node.prototype, 'ENTITY_REFERENCE_NODE', 5, false, true, false);
box.defineProperty(Node.prototype, 'ENTITY_NODE', 6, false, true, false);
box.defineProperty(Node.prototype, 'PROCESSING_INSTRUCTION_NODE', 7, false, true, false);
box.defineProperty(Node.prototype, 'COMMENT_NODE', 8, false, true, false);
box.defineProperty(Node.prototype, 'DOCUMENT_NODE', 9, false, true, false);
box.defineProperty(Node.prototype, 'DOCUMENT_TYPE_NODE', 10, false, true, false);
box.defineProperty(Node.prototype, 'DOCUMENT_FRAGMENT_NODE', 11, false, true, false);
box.defineProperty(Node.prototype, 'NOTATION_NODE', 12, false, true, false);
box.defineProperty(Node.prototype, 'DOCUMENT_POSITION_DISCONNECTED', 1, false, true, false);
box.defineProperty(Node.prototype, 'DOCUMENT_POSITION_PRECEDING', 2, false, true, false);
box.defineProperty(Node.prototype, 'DOCUMENT_POSITION_FOLLOWING', 4, false, true, false);
box.defineProperty(Node.prototype, 'DOCUMENT_POSITION_CONTAINS', 8, false, true, false);
box.defineProperty(Node.prototype, 'DOCUMENT_POSITION_CONTAINED_BY', 16, false, true, false);
box.defineProperty(Node.prototype, 'DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC', 32, false, true, false);
box.defineProperty(Node.prototype, 'appendChild', function appendChild(){debugger;}, true, true, true); box.func_set_fake_toString(Node.prototype.appendChild)
box.defineProperty(Node.prototype, 'cloneNode', function cloneNode(){debugger;}, true, true, true); box.func_set_fake_toString(Node.prototype.cloneNode)
box.defineProperty(Node.prototype, 'compareDocumentPosition', function compareDocumentPosition(){debugger;}, true, true, true); box.func_set_fake_toString(Node.prototype.compareDocumentPosition)
box.defineProperty(Node.prototype, 'contains', function contains(){debugger;}, true, true, true); box.func_set_fake_toString(Node.prototype.contains)
box.defineProperty(Node.prototype, 'getRootNode', function getRootNode(){debugger;}, true, true, true); box.func_set_fake_toString(Node.prototype.getRootNode)
box.defineProperty(Node.prototype, 'hasChildNodes', function hasChildNodes(){debugger;}, true, true, true); box.func_set_fake_toString(Node.prototype.hasChildNodes)
box.defineProperty(Node.prototype, 'insertBefore', function insertBefore(){debugger;}, true, true, true); box.func_set_fake_toString(Node.prototype.insertBefore)
box.defineProperty(Node.prototype, 'isDefaultNamespace', function isDefaultNamespace(){debugger;}, true, true, true); box.func_set_fake_toString(Node.prototype.isDefaultNamespace)
box.defineProperty(Node.prototype, 'isEqualNode', function isEqualNode(){debugger;}, true, true, true); box.func_set_fake_toString(Node.prototype.isEqualNode)
box.defineProperty(Node.prototype, 'isSameNode', function isSameNode(){debugger;}, true, true, true); box.func_set_fake_toString(Node.prototype.isSameNode)
box.defineProperty(Node.prototype, 'lookupNamespaceURI', function lookupNamespaceURI(){debugger;}, true, true, true); box.func_set_fake_toString(Node.prototype.lookupNamespaceURI)
box.defineProperty(Node.prototype, 'lookupPrefix', function lookupPrefix(){debugger;}, true, true, true); box.func_set_fake_toString(Node.prototype.lookupPrefix)
box.defineProperty(Node.prototype, 'normalize', function normalize(){debugger;}, true, true, true); box.func_set_fake_toString(Node.prototype.normalize)
box.defineProperty(Node.prototype, 'removeChild', function removeChild(){debugger;}, true, true, true); box.func_set_fake_toString(Node.prototype.removeChild)
box.defineProperty(Node.prototype, 'replaceChild', function replaceChild(){debugger;}, true, true, true); box.func_set_fake_toString(Node.prototype.replaceChild)
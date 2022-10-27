let fs = require("fs");

function ReadCode(name) {
  return fs.readFileSync(`${__dirname}/${name}`) + "\r\n";
}

function GetCode() {
  let code = "";
  code += ReadCode("EventTarget.js");
  code += ReadCode("Node.js");
  code += ReadCode("Document.js");
  code += ReadCode("HTMLDocument.js");
  code += ReadCode("CanvasRenderingContext2D.js");
  code += ReadCode("Element.js");
  code += ReadCode("HTMLElement.js");
  code += ReadCode("HTMLCanvasElement.js");
  code += ReadCode('Location.js');
  code += ReadCode('History.js');
  code += ReadCode('Storage.js');
  code += ReadCode('Navigator.js');
  code += ReadCode('Screen.js');
  code += ReadCode("Window.js");
  code += ReadCode("proxy_obj.js");
  code += "debugger; \r\n";
  return code;
}

module.exports = {
  GetCode,
};

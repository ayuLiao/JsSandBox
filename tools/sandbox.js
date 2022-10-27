let fs = require("fs")

function ReadCode(name) {
    return fs.readFileSync(`${__dirname}/${name}`) + "\r\n"
}

function GetCode() {
    let code = "debugger; \n"
    code += ReadCode("config.js")
    ignore_files = ['config.js', 'sandbox.js', 'dump_browser_env.js']
    fs.readdirSync(`${__dirname}`).forEach((filename) => {
        if (!(ignore_files.includes(filename))) {
            code += ReadCode(filename)
        }
    })
    return code
}

module.exports = {
    GetCode
}
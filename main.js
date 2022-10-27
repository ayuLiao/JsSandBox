const {VM, VMScript} = require('vm2');
const fs = require("fs")
const sandbox = require(`${__dirname}/tools/sandbox`)
const env = require(`${__dirname}/env/env`)


const vm = new VM();
const need_debug_code = fs.readFileSync(`${__dirname}/code/zhvmp.js`)
const tools_code = sandbox.GetCode()
const env_code = env.GetCode()

const script = new VMScript(tools_code + env_code + need_debug_code, "./debugJS.js");
console.log(vm.run(script));
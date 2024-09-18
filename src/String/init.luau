--!strict
--!native
--!optimize 2

local exports = {
    endsWith = require(script.endsWith),
    startsWith = require(script.startsWith),
    trim = require(script.trim),
    trimEnd = require(script.trimEnd),
    trimStart = require(script.trimStart),
}

return exports

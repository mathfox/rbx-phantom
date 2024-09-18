--!strict
--!native
--!optimize 2

local MAX_SAFE_INTEGER = require(script.Parent.MAX_SAFE_INTEGER)
local isInteger = require(script.Parent.isInteger)

return function(value: any): boolean
    return isInteger(value) and math.abs(value) <= MAX_SAFE_INTEGER
end

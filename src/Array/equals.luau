--!strict
--!native
--!optimize 2

local compareArray = require(script.Parent.Parent.Shared.compare).compareArray
local isArray = require(script.Parent.isArray)

local function equals(...: unknown): boolean
    local firstValue = select(1, ...)

    if not isArray(firstValue) then
        return false
    end

    for index = 2, select("#", ...) do
        local value = select(index, ...)

        if not isArray(value) then
            return false
        end

        if not compareArray(firstValue :: { unknown }, value) then
            return false
        end
    end

    return true
end

return equals

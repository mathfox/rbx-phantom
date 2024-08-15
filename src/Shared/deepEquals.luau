--!strict
--!native

local strictEqual = require(script.Parent.Parent.Util.strictEqual)
local deepCompare = require(script.Parent.deepCompare).deepCompare

--[[
    Works both with primites, as well as nested tables of any kind.
]]
local function deepEquals(...: unknown): boolean
    if strictEqual(...) then
        return true
    end

    local firstValue = select(1, ...)

    for index = 2, select("#", ...) do
        local value = select(index, ...)

        if not deepCompare(firstValue, value) then
            return false
        end
    end

    return true
end

return deepEquals

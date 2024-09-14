--!strict
--!native
--!optimize 2

local deepCompareTable = require(script.Parent.Parent.Shared.deepCompare).deepCompareTable
local isMap = require(script.Parent.isMap)

--[[
    Compares maps for equality using deep comparison.

    ```lua
    local map = { hello = "world", goodbye = { world = "hello" } }
    local other1 = { hello = "world", goodbye = { world = "hello" } }
    local other2 = { hello = "hello", world = "goodbye" }

    local value = deepEquals(dictionary, other1) -- true
    local value = deepEquals(dictionary, other1, other2) -- false
    ```
]]
local function deepEquals(...: unknown): boolean
    local firstValue = select(1, ...)

    if not isMap(firstValue) then
        return false
    end

    for index = 2, select("#", ...) do
        local value = select(index, ...)

        if not isMap(value) then
            return false
        end

        if not deepCompareTable(firstValue :: any, value) then
            return false
        end
    end

    return true
end

return deepEquals

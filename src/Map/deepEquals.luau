--!strict
--!native

local deepCompare =
    require(script.Parent.Parent.Shared.deepCompare).deepCompareMap
local isMap = require(script.Parent.isMap)

--[[
    Compares two dictionaries for equality using deep comparison.

    ```lua
    local dictionary = { hello = "world", goodbye = { world = "hello" } }
    local other1 = { hello = "world", goodbye = { world = "hello" } }
    local other2 = { hello = "hello", world = "goodbye" }

    local value = EqualsDeep(dictionary, other1) -- true
    local value = EqualsDeep(dictionary, other1, other2) -- false
    ```
]]
local function equalsDeep(...: unknown): boolean
    local firstValue = select(1, ...)

    if not isMap(firstValue) then
        return false
    end

    for index = 2, select("#", ...) do
        local value = select(index, ...)

        if not isMap(value) then
            return false
        end

        if not deepCompare(firstValue :: any, value) then
            return false
        end
    end

    return true
end

return equalsDeep

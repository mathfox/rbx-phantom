--!strict
--!native

local compareMap = require(script.Parent.Parent.Shared.compare).compareMap
local isMap = require(script.Parent.isMap)

--[[
    Compares two dictionaries for equality.

    ```lua
    local dictionary = { hello = "world", goodbye = "world" }
    local other1 = { hello = "world", goodbye = "world" }
    local other2 = { hello = "hello", world = "goodbye" }

    local value = equals(dictionary, other1) -- true
    local value = equals(dictionary, other1, other2) -- false
    ```
]]
local function equals(...: unknown): boolean
    local firstValue = select(1, ...)

    if not isMap(firstValue) then
        return false
    end

    for i = 2, select("#", ...) do
        local value = select(i, ...)

        if not isMap(value) then
            return false
        end

        if not compareMap(firstValue :: any, value) then
            return false
        end
    end

    return true
end

return equals

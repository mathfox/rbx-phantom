--!strict
--!native
--!optimize 2

local compareTable = require(script.Parent.Parent.Shared.compare).compareTable
local isMap = require(script.Parent.isMap)

--[[
    Compares two maps for equality.

    ```lua
    local map = { hello = "world", goodbye = "world" }
    local other1 = { hello = "world", goodbye = "world" }
    local other2 = { hello = "hello", world = "goodbye" }

    local value = equals(map, other1) -- true
    local value = equals(map, other1, other2) -- false
    ```
]]
local function equals(...: unknown): boolean
    local firstValue = select(1, ...)

    if not isMap(firstValue) then
        return false
    end

    for index = 2, select("#", ...) do
        local value = select(index, ...)

        if not isMap(value) then
            return false
        end

        if not compareTable(firstValue :: any, value) then
            return false
        end
    end

    return true
end

return equals

--!strict
--!native
--!optimize 2

local toSet = require(script.Parent.toSet)
local keys = require(script.Parent.Parent.Shared.keys)
local setDifference = require(script.Parent.Parent.Set.difference)

--[[
    Returns an array of values that are in the first array, but not in the other arrays.

    ```lua
    local array1 = { "hello", "world" }
    local array2 = { "cat", "dog", "hello" }

    local diff = difference(array1, array2) -- { "world" }
    ```
]]
local function difference<TValue>(array: { TValue }, ...: { TValue }): { TValue }
    local arraySet = toSet(array)
    local otherSets = {}

    for index = 1, select("#", ...) do
        local otherArray = select(index, ...)

        if otherArray ~= nil then
            table.insert(otherSets, toSet(otherArray))
        end
    end

    local differenceSet = setDifference(arraySet, unpack(otherSets))

    return keys(differenceSet :: any)
end

return difference

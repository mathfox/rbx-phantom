--!strict
--!native
--!optimize 2

local toSet = require(script.Parent.toSet)
local toArray = require(script.Parent.Parent.Shared.keys)
local setSymmetricDifference = require(script.Parent.Parent.Set.symmetricDifference)

--[[
    Returns an array of values that are in the first array, but not in the other arrays, and vice versa.

    ```lua
    local array1 = { "hello", "world" }
    local array2 = { "cat", "dog", "hello" }

    local difference = symmetricDifference(array1, array2) -- { "world", "cat", "dog" }
    ```
]]
local function symmetricDifference<TValue>(array: { TValue }, ...: TValue | nil): { TValue }
    local arraySet = toSet(array)
    local otherSets = {}

    for index = 1, select("#", ...) do
        local otherArray = select(index, ...)
        if otherArray ~= nil then
            table.insert(otherSets, toSet(otherArray))
        end
    end

    local differenceSet = setSymmetricDifference(arraySet, unpack(otherSets))

    return toArray(differenceSet)
end

return symmetricDifference

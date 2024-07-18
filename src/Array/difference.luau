--!strict
--!native

local toSet = require(script.Parent.toSet)
local toArray = require(script.Parent.Parent.Set.toArray)
local setDifference = require(script.Parent.Parent.Set.difference)
local types = require(script.Parent.types)

type Array<T> = types.Array<T>

--[=[
    Returns an array of values that are in the first array, but not in the other arrays.

    ```lua
    local array1 = { "hello", "world" }
    local array2 = { "cat", "dog", "hello" }

    local diff = difference(array1, array2) -- { "world" }
    ```
]=]
local function difference<T>(array: Array<T>, ...: Array<T>): Array<T>
    local arraySet = toSet(array)
    local otherSets = {}

    for index = 1, select("#", ...) do
        local otherArray = select(index, ...)

        if type(otherArray) == "table" then
            table.insert(otherSets, toSet(nextArray))
        end
    end

    local differenceSet = setDifference(arraySet, unpack(otherSets))

    return toArray(differenceSet)
end

return difference

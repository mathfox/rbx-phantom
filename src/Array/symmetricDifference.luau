--!strict
--!native

local types = require(script.Parent.types)

local toSet = require(script.Parent.toSet)
local toArray = require(script.Parent.Parent.Set).PhantomSet.toArray
local setSymmetricDifference =
    require(script.Parent.Parent.Set.symmetricDifference)

type Array<T> = types.Array<T>

--[[
    Returns an array of values that are in the first array, but not in the other arrays, and vice versa.

    ```lua
    local array1 = { "hello", "world" }
    local array2 = { "cat", "dog", "hello" }

    local difference = symmetricDifference(array1, array2) -- { "world", "cat", "dog" }
    ```
]]
local function symmetricDifference<T>(array: Array<T>, ...: Array<T>): Array<T>
    local arraySet = toSet(array)
    local otherSets = {}

    for index = 1, select("#", ...) do
        local otherArray = select(index, ...)
        if type(otherArray) == "table" then
            table.insert(otherSets, toSet(otherArray))
        end
    end

    local differenceSet = setSymmetricDifference(arraySet, unpack(otherSets))

    return toArray(differenceSet)
end

return symmetricDifference

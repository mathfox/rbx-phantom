--!strict
--!native
--!optimize 2

local isArray = require(script.Parent.Parent.Array.isArray)
local arrayTypes = require(script.Parent.Parent.Array.types)
local types = require(script.Parent.types)

type UnknownArray = arrayTypes.UnknownArray
type UnknownTable = types.UnknownTable

local deepCompare: (left: unknown, right: unknown) -> boolean

-- Assumes that both values are checked with `isArray` function.
local function deepCompareArray(left: UnknownArray, right: UnknownArray): boolean
    local leftLength = #left

    if #right ~= leftLength then
        return false
    end

    for index = 1, leftLength do
        if not deepCompare(left[index], right[index]) then
            return false
        end
    end

    return true
end

local function deepCompareTable(left: UnknownTable, right: UnknownTable): boolean
    for key, value in left do
        if not deepCompare(value, right[key]) then
            return false
        end
    end

    for key, value in right do
        if not deepCompare(value, left[key]) then
            return false
        end
    end

    return true
end

function deepCompare(left, right)
    if type(left) ~= "table" or type(right) ~= "table" then
        return left == right
    end

    local leftIsArray = isArray(left :: UnknownTable)
    local rightIsArray = isArray(right :: UnknownTable)

    if leftIsArray then
        if not rightIsArray then
            return false
        end

        return deepCompareArray(left :: UnknownArray, right :: UnknownArray)
    elseif rightIsArray then
        return false
    end

    -- Here we know that both "a" and "b" are not arrays, but some table shape.

    return deepCompareTable(left :: UnknownTable, right :: UnknownTable)
end

local exports = {
    deepCompare = deepCompare,
    deepCompareArray = deepCompareArray,
    deepCompareTable = deepCompareTable,
}

return exports

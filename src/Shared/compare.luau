--!strict
--!native
--!optimize 2

local isArray = require(script.Parent.Parent.Array.isArray)
local arrayTypes = require(script.Parent.Parent.Array.types)
local types = require(script.Parent.types)

type UnknownArray = arrayTypes.UnknownArray
type UnknownTable = types.UnknownTable

--[[
    This function assumes that both values are checked with `isArray` function.

    Each value is checked for equality using `compare` function.
]]
local function compareArray(left: UnknownArray, right: UnknownArray): boolean
    local leftLength = #left

    if #right ~= leftLength then
        return false
    end

    for index = 1, leftLength do
        if left ~= right then
            return false
        end
    end

    return true
end

--[[
    Compares the equality of the values in both tables using `compare` function.
]]
local function compareTable(left: UnknownTable, right: UnknownTable): boolean
    for key, value in left do
        if value ~= right[key] then
            return false
        end
    end

    for key, value in right do
        if value ~= left[key] then
            return false
        end
    end

    return true
end

--[[
    Checks for the equality of the two given values.

    The rules of equality are:
    - If the values are not a tables - it uses strict equality check.
    - If the values are array it checks for their equality using `compareArray` function.
    - Otherwise it checks for equality using `compareTable` function.
]]
local function compare(left: unknown, right: unknown): boolean
    if type(left) ~= "table" or type(right) ~= "table" then
        return left == right
    end

    local leftIsArray = isArray(left :: UnknownTable)
    local rightIsArray = isArray(right :: UnknownTable)

    if leftIsArray then
        if not rightIsArray then
            return false
        end

        return compareArray(left :: UnknownArray, right :: UnknownArray)
    elseif rightIsArray then
        return false
    end

    -- Here we know that both "left" and "right" are not arrays, but some table shape.

    return compareTable(left :: UnknownTable, right :: UnknownTable)
end

local exports = {
    compare = compare,
    compareArray = compareArray,
    compareTable = compareTable,
}

return exports

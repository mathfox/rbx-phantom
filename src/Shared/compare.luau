--!strict
--!native
--!optimize 2

local isArray = require(script.Parent.Parent.Array.isArray)

--[[
    This function assumes that both values are checked with `isArray` function.
]]
local function compareArray(left: { unknown }, right: { unknown }): boolean
    local leftLength = #left

    if #right ~= leftLength then
        return false
    end

    for index = 1, leftLength do
        if left[index] ~= right[index] then
            return false
        end
    end

    return true
end

local function compareTable(left: { [unknown]: unknown }, right: { [unknown]: unknown }): boolean
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

    local leftIsArray = isArray(left :: { [unknown]: unknown })
    local rightIsArray = isArray(right :: { [unknown]: unknown })

    if leftIsArray then
        if not rightIsArray then
            return false
        end

        return compareArray(left :: { unknown }, right :: { unknown })
    elseif rightIsArray then
        return false
    end

    -- Here we know that both "left" and "right" are not arrays, but some table shape.

    return compareTable(left :: { [unknown]: unknown }, right :: { [unknown]: unknown })
end

local exports = {
    compare = compare,
    compareArray = compareArray,
    compareTable = compareTable,
}

return exports

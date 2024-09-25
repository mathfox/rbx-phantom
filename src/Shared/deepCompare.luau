--!strict
--!native
--!optimize 2

local isArray = require(script.Parent.Parent.Array.isArray)

local deepCompare: (left: unknown, right: unknown) -> boolean

-- Assumes that both values are checked with `isArray` function.
local function deepCompareArray(left: { unknown }, right: { unknown }): boolean
    if left == right then
        return true
    end

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

--[[
    Compares two tables.

    The comparison rules are following:
    Both tables should:
    - have the same keys.
    - have the same values.
]]
local function deepCompareTable(left: { [unknown]: unknown }, right: { [unknown]: unknown }): boolean
    if left == right then
        return true
    end

    local leftKeysToValues: { [unknown]: unknown } = {}

    for key, value in left do
        if type(key) == "table" then
            leftKeysToValues[key] = value
        elseif not deepCompare(value, right[key]) then
            return false
        end
    end

    local rightKeysToValues: { [unknown]: unknown } = {}

    for key, value in right do
        if type(key) == "table" then
            rightKeysToValues[key] = value
        elseif not deepCompare(value, left[key]) then
            return false
        end
    end

    local clonedRightKeysToValues = table.clone(rightKeysToValues)

    for leftKey, leftValue in leftKeysToValues do
        local isMatchFound = false

        for rightKey, rightValue in clonedRightKeysToValues do
            if deepCompare(leftKey, rightKey) and deepCompare(leftValue, rightValue) then
                clonedRightKeysToValues[rightKey] = nil

                isMatchFound = true
                break
            end
        end

        if not isMatchFound then
            return false
        end
    end

    local clonedLeftKeysToValues = table.clone(leftKeysToValues)

    for rightKey, rightValue in rightKeysToValues do
        local isMatchFound = false

        for leftKey, leftValue in clonedLeftKeysToValues do
            if deepCompare(rightKey, leftKey) and deepCompare(rightValue, leftValue) then
                clonedLeftKeysToValues[leftKey] = nil

                isMatchFound = true
                break
            end
        end

        if not isMatchFound then
            return false
        end
    end

    return true
end

function deepCompare(left, right)
    if type(left) ~= "table" or type(right) ~= "table" then
        return left == right
    end

    if left == right then
        return true
    end

    local leftIsArray = isArray(left)
    local rightIsArray = isArray(right)

    if leftIsArray then
        if not rightIsArray then
            return false
        end

        return deepCompareArray(left :: { unknown }, right :: { unknown })
    elseif rightIsArray then
        return false
    end

    -- Here we know that both "a" and "b" are not arrays, but some table shape.

    return deepCompareTable(left :: { [unknown]: unknown }, right :: { [unknown]: unknown })
end

local exports = {
    deepCompare = deepCompare,
    deepCompareArray = deepCompareArray,
    deepCompareTable = deepCompareTable,
}

return exports

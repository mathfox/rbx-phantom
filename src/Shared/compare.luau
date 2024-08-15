--!strict
--!native

local strictIsArray = require(script.Parent.Parent.Array.strictIsArray)
local arrayTypes = require(script.Parent.Parent.Array.types)
local types = require(script.Parent.types)

type UnknownArray = arrayTypes.UnknownArray
type UnknownTable = types.UnknownTable

local compare: (a: unknown, b: unknown) -> boolean

-- Assumes that both values are checked with `isArray` function.
local function compareArray(a: UnknownArray, b: UnknownArray): boolean
    local aLength = #a

    if #b ~= aLength then
        return false
    end

    for index = 1, aLength do
        if a[index] ~= b[index] then
            return false
        end
    end

    return true
end

function compare(a, b)
    if type(a) ~= "table" or type(b) ~= "table" then
        return a == b
    end

    local aIsArray = strictIsArray(a :: UnknownTable)
    local bIsArray = strictIsArray(b :: UnknownTable)

    if aIsArray then
        if not bIsArray then
            return false
        end

        return compareArray(a :: UnknownArray, b :: UnknownArray)
    elseif bIsArray then
        return false
    end

    -- Here we know that both "a" and "b" are not arrays, but some table shape.

    for key, value in a :: UnknownTable do
        if value ~= (b :: UnknownTable)[key] then
            return false
        end
    end

    for key, value in b :: UnknownTable do
        if value ~= (a :: UnknownTable)[key] then
            return false
        end
    end

    return true
end

local exports = {
    compareArray = compareArray,
    compare = compare,
}

return exports

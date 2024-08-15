--!strict
--!native

local isArray = require(script.Parent.isArray)
local types = require(script.Parent.types)

type Array<T> = types.Array<T>

local function deepCompare(a: Array<unknown>, b: Array<unknown>): boolean
    --if type(a) ~= "table" or type(b) ~= "table" then
    --    return a == b
    --end

    local aLength = #a

    if #b ~= aLength then
        return false
    end

    for i = 1, aLength do
        if not deepCompare(a[i], b[i]) then
            return false
        end
    end

    return true
end

--[[
	Compares two arrays for equality using deep comparison.

	```lua
	local array = { 1, 2, 3, { 4, 5 } }
	local other = { 1, 2, 3, { 4, 5 } }

	local value = deepEquals(array, other) -- true
	local value = deepEquals(array, other, { 1, 2, 3, { 4, 5 } }) -- true
	local value = deepEquals(array, other, { 1, 2, 3, { 4, 6 } }) -- false
	```
]]
local function deepEquals(...: unknown): boolean
    local firstValue = select(1, ...)

    if not isArray(firstValue) then
        return false
    end

    for index = 2, select("#", ...) do
        local value = select(index, ...)
        if not isArray(value) then
            return false
        end

        if not deepCompare(firstValue, value) then
            return false
        end
    end

    return true
end

return deepEquals

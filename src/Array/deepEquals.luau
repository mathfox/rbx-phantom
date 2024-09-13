--!strict
--!native
--!optimize 2

local deepCompareArray = require(script.Parent.Parent.Shared.deepCompare).deepCompareArray
local isArray = require(script.Parent.isArray)
local types = require(script.Parent.types)

--[[
	Compares arrays for equality using deep comparison.

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

        if not deepCompareArray(firstValue :: types.UnknownArray, value) then
            return false
        end
    end

    return true
end

return deepEquals

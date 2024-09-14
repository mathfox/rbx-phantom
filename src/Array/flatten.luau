--!strict
--!native
--!optimize 2

local isArray = require(script.Parent.isArray)

--[[
	Flattens an array. If depth is not specified, it will flatten the array as far as it can go.

	```lua
	local array = {
		{ 1, 2, 3 },
		{ 4, 5, 6 },
		{ 7, { 8, 9 } },
	}

	local new = flatten(array) -- { 1, 2, 3, 4, 5, 6, 7, 8, 9 }
	local new = flatten(array, 1) -- { 1, 2, 3, 4, 5, 6, 7, { 8, 9 } }
	```
]]
local function flatten<TValue>(array: { TValue }, depth: number | nil): { TValue }
    local result: { TValue } = {}

    for _, value in array do
        if isArray(value) and (not depth or depth > 0) then
            local nested = flatten(value :: any, if depth then depth - 1 else nil)

            for _, nestedValue in nested do
                table.insert(result, nestedValue)
            end
        else
            table.insert(result, value)
        end
    end

    return result
end

return flatten

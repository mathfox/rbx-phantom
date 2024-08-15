--!strict
--!native

local types = require(script.Parent.types)

type Array<T> = types.Array<T>

--[[
	Removes the first item from an array and returns the array with the item removed.

	```lua
	local array = { 1, 2, 3 }

	local new = shift(array) -- { 2, 3 }
	local new = shift(array, 2) -- { 3 }
	```
]]
local function shift<T>(array: Array<T>, count: number | nil): Array<T>
    local result = {}

    for index = if count then count + 1 else 2, #array do
        table.insert(result, array[index])
    end

    return result
end

return shift

--!strict
--!native
--!optimize 2

local types = require(script.Parent.types)

type Array<T> = types.Array<T>

--[[
	Filters an array using a filterer callback.
    Any items that do not pass the filterer will be removed from the array.

	```lua
	local array = { 1, 2, 3 }

	local result = filter(array, function(item, index)
		return item > 1
	end) -- { 2, 3 }
	```
]]
local function filter<TValue>(
    array: Array<TValue>,
    predicate: (value: TValue, index: number, array: Array<TValue>) -> unknown
): Array<unknown>
    local result: Array<unknown> = {}

    for index, value in array do
        if predicate(value, index, array) then
            table.insert(result, value)
        end
    end

    return result
end

return filter

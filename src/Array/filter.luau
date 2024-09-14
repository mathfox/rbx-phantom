--!strict
--!native
--!optimize 2

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
    array: { TValue },
    predicate: (value: TValue, index: number, arrayRef: { TValue }) -> unknown
): { TValue }
    local result: { TValue } = {}

    for index, value in array do
        if predicate(value, index, array) then
            table.insert(result, value)
        end
    end

    return result
end

return filter

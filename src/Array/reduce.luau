--!strict
--!native
--!optimize 2

--[[
	Reduces the array using the given reducer and initial accumulator value.
	If no `initialReduction` value is given, the first item in the array is used.

	```lua
	local array = { 1, 2, 3 }

	local value = reduce(array, function(accumulator, item, index)
		return accumulator - item
	end) -- -4

	local value = reduce(array, function(accumulator, item, index)
		table.insert(accumulator, item)
		return accumulator
	end, {}) -- { 1, 2, 3 }
	```
]]
local function reduce<TValue, TOuput>(
    array: { TValue },
    reducer: (
        accumulator: TOuput,
        value: TValue,
        index: number,
        arrayRef: { TValue }
    ) -> TOuput,
    initReduction: TOuput | nil
): TOuput
    local result = initReduction
    local start = 1

    if result == nil then
        result = array[1] :: any
        start = 2
    end

    for index = start, #array do
        result = reducer(result :: any, array[index], index, array)
    end

    return result :: any
end

return reduce

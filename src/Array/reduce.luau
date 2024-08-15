--!strict
--!native

local types = require(script.Parent.types)

type Array<T> = types.Array<T>

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
local function reduce<T, U>(
    array: Array<T>,
    reducer: (
        accumulator: U,
        value: T,
        index: number,
        array: Array<T>
    ) -> U,
    initReduction: U | nil
): U
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

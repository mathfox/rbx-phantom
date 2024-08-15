--!strict
--!native

local types = require(script.Parent.types)

type Array<T> = types.Array<T>

--[[
	Reduces the array using the given reducer and initial accumulator value, starting from the end of the array.
    If no `initialReduction` value is given, the last item in the array is used.

	```lua
	local array = { 1, 2, 3 }

	local value = reduceRight(array, function(accumulator, item, index)
		return accumulator - item
	end) -- 0

	local value = reduceRight(array, function(accumulator, item, index)
		table.insert(accumulator, item)
		return accumulator
	end, {}) -- { 3, 2, 1 }
	```
]]
local function reduceRight<T, U>(
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
    local start = #array

    if result == nil then
        result = array[start] :: any
        start -= 1
    end

    for index = start, 1, -1 do
        result = reducer(result :: any, array[index], index, array)
    end

    return result :: any
end

return reduceRight

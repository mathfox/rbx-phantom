--!strict
--!native
--!optimize 2

--[[
	Maps the array using the mapper function.

	```lua
	local array = { 1, 2, 3 }

	local new = map(array, function(value, index)
		return value * 2
	end) -- { 2, 4, 6 }
	```
]]
local function map<TValue, TOutput>(
    array: { TValue },
    mapper: (value: TValue, index: number, arrayRef: { TValue }) -> TOutput | nil
): { TOutput }
    local mapped: { TOutput } = {}

    for index, value in array do
        local mappedValue = mapper(value, index, array)

        if mappedValue ~= nil then
            table.insert(mapped, mappedValue)
        end
    end

    return mapped
end

return map

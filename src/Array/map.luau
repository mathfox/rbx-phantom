--!strict
--!native

local types = require(script.Parent.types)

type Array<T> = types.Array<T>

--[[
	Maps the array using the mapper function.

	```lua
	local array = { 1, 2, 3 }

	local new = map(array, function(value, index)
		return value * 2
	end) -- { 2, 4, 6 }
	```
]]
local function map<T, U>(
    array: Array<T>,
    mapper: (
        value: T,
        index: number,
        array: Array<T>
    ) -> U | nil
): Array<U>
    local mapped = {}

    for index, value in array do
        local mappedValue = mapper(value, index, array)

        if mappedValue ~= nil then
            table.insert(mapped, mappedValue)
        end
    end

    return mapped
end

return map

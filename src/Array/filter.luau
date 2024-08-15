--!strict
--!native

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
local function filter<T>(
    array: Array<T>,
    predicate: (
        value: T,
        index: number,
        array: Array<T>
    ) -> unknown
): Array<unknown>
    local result = {}

    for index = 1, #array do
        if not predicate(array[index], index, array) then
            table.insert(result, array[index])
        end
    end

    return result
end

return filter

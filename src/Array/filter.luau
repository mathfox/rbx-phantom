--!strict
--!native

local types = require(script.Parent.types)

type Array<T> = types.Array<T>

--[[
	Filters an array using a filterer callback. Any items that do not pass the filterer will be removed from the array.

	If no filterer is provided, all items will be kept.

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
    ) -> boolean
): Array<unknown>
    local result = table.clone(array)

    for index = 1, #array do
        if not predicate(array[index], index, array) then
            result[index] = nil
        end
    end

    return result
end

return filter

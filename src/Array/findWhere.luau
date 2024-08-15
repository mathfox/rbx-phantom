--!strict
--!native

local types = require(script.Parent.types)

type Array<T> = types.Array<T>

--[[
	Finds the index of the first item in the array that passes the predicate.

	```lua
	local array = { 1, 2, 3 }

	local index = findWhere(array, function(item, index)
		return item > 1
	end) -- 2
	```
]]
local function findWhere<T>(
    array: Array<T>,
    predicate: (
        value: T,
        index: number,
        array: Array<T>
    ) -> any,
    from: number | nil
): number | nil
    for index = if from then if from < 0 then #array + 1 + from else from + 1 else 1, #array do
        if predicate(array[index], index, array) then
            return index
        end
    end

    return nil
end

return findWhere

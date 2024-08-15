--!strict
--!native

local types = require(script.Parent.types)

type Array<T> = types.Array<T>

--[[
	Finds the index of the last item in the array that passes the predicate.

	```lua
	local array = { "hello", "world", "hello" }

	local index = findWhereLast(array, function(item, index)
		return item == "hello"
	end) -- 3

	local index = findWhereLast(array, function(item, index)
		return item == "hello"
	end, 2) -- 1
	```
]]
local function findWhereLast<T>(
    array: Array<T>,
    predicate: (
        value: T,
        index: number,
        array: Array<T>
    ) -> any,
    from: number | nil
): number | nil
    for index = if from then if from < 0 then #array + 1 + from else from + 1 else #array, 1, -1 do
        if predicate(array[index], index, array) then
            return index
        end
    end

    return nil
end

return findWhereLast

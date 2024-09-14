--!strict
--!native
--!optimize 2

--[[
	Finds the 0-based index of the last item in the array that passes the predicate.

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
local function findWhereLast<TValue>(
    array: { TValue },
    predicate: (value: TValue, index: number, arrayRef: { TValue }) -> any,
    from: number | nil
): number | nil
    for index = if from then if from < 0 then #array + 1 + from else from + 1 else #array, 1, -1 do
        if predicate(array[index], index, array) then
            return index - 1
        end
    end

    return nil
end

return findWhereLast

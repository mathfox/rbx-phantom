--!strict
--!native
--!optimize 2

--[[
	Finds the 0-based index of the first item in the array that passes the predicate.

	```lua
	local array = { 1, 2, 3 }

	local index = findWhere(array, function(item, index)
		return item > 1
	end) -- 2
	```
]]
local function findWhere<TValue>(
    array: { TValue },
    predicate: (value: TValue, index: number, arrayRef: { TValue }) -> any,
    from: number | nil
): number | nil
    for index = if from then if from < 0 then #array + 1 + from else from + 1 else 1, #array do
        if predicate(array[index], index, array) then
            return index - 1
        end
    end

    return nil
end

return findWhere

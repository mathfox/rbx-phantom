--!strict
--!native
--!optimize 2

--[[
	Finds the 0-based index of the last item in the array that matches the value.

	```lua
	local array = { "hello", "world", "hello" }

	local index = findLast(array, "hello") -- 3
	local index = findLast(array, "hello", 2) -- 1
	```
]]
local function findLast<TValue>(array: { TValue }, value: any, from: number | nil): number | nil
    for index = if from then if from < 0 then #array + 1 + from else from + 1 else #array, 1, -1 do
        if array[index] == value then
            return index - 1
        end
    end

    return nil
end

return findLast

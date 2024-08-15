--!strict
--!native

--[[
	Finds the index of the first item in the array that matches the value. This is
	mostly a wrapper around `table.find`, with the ability to specify a negative
	number as the start index (to search relative to the end of the array).

	```lua
	local array = { "hello", "world", "hello" }

	local index = find(array, "hello") -- 1
	local index = find(array, "hello", 2) -- 3
	```
]]
local function find<T>(array: { T }, value: any, from: number | nil): number | nil
    return table.find(
        array,
        value,
        if from then if from < 0 then #array + 1 + from else from + 1 else 1
    )
end

return find

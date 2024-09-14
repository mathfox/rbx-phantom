--!strict
--!native
--!optimize 2

--[[
	Finds the 0-based index of the first item in the array that matches the value.

	```lua
	local array = { "hello", "world", "hello" }

	local index = find(array, "hello") -- 1
	local index = find(array, "hello", 2) -- 3
	```
]]
local function find<TValue>(array: { TValue }, value: any, from: number | nil): number | nil
    local index = table.find(array, value, if from then if from < 0 then #array + 1 + from else from + 1 else 1)
    return if index then index - 1 else nil
end

return find

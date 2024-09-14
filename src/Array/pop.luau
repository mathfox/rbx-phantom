--!strict
--!native
--!optimize 2

--[[
	Removes an element from the end of the array, and returns the array with the popped elements removed.

	```lua
	local array = { 1, 2, 3 }

	local new = pop(array) -- { 1, 2 }
	local new = pop(array, 2) -- { 1 }
	```
]]
local function pop<TValue>(array: { TValue }, count: number | nil): { TValue }
    local result = {}

    for index = 1, #array - (if count then count else 1) do
        table.insert(result, array[index])
    end

    return result
end

return pop

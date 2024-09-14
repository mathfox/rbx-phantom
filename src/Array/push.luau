--!strict
--!native
--!optimize 2

--[[
	Adds elements to the end of the array.

	```lua
	local array = { 1, 2, 3 }

	local new = push(array, 4, 5, 6) -- { 1, 2, 3, 4, 5, 6 }
	```
]]
local function push<TValue>(array: { TValue }, ...: TValue | nil): { TValue }
    local result = table.clone(array)

    for index = 1, select("#", ...) do
        local value = select(index, ...)

        if value ~= nil then
            table.insert(result, value)
        end
    end

    return result
end

return push

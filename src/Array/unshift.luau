--!strict
--!native
--!optimize 2

--[[
	Inserts values to the beginning of an array.

	```lua
	local array = { 1, 2, 3 }

	local new = unshift(array, 4, 5) -- { 4, 5, 1, 2, 3 }
	```
]]
local function unshift<TValue>(array: { TValue }, ...: TValue | nil): { TValue }
    local result = table.clone(array)

    for index = select("#", ...), 1, -1 do
        local value = select(index, ...)

        if value ~= nil then
            table.insert(result, 1, value)
        end
    end

    return result
end

return unshift

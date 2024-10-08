--!strict
--!native
--!optimize 2

--[[
	Removes values from an array.

	```lua
	local array = { "a", "b", "c", "c", "d", "e" }

	local new = removeValues(array, "c", "d") -- { "a", "b", "e" }
	```
]]
local function removeValues<TValue>(array: { TValue }, ...: TValue | nil): { TValue }
    local valueSet = {}

    for index = 1, select("#", ...) do
        local value = select(index, ...)

        if value ~= nil then
            valueSet[value] = true
        end
    end

    local result = table.clone(array)

    for index = #array, 1, -1 do
        if valueSet[array[index]] then
            table.remove(result, index)
        end
    end

    return result
end

return removeValues

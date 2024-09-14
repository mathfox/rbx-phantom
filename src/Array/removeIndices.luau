--!strict
--!native
--!optimize 2

--[[
	Removes values from an array at the given indices.

	```lua
	local array = { 1, 2, 3 }

	local new = removeIndices(array, 1, 2) -- { 3 }
	local new = removeIndices(array, 0, -1) -- { 1 }
	```
]]
local function removeIndices<TValue>(array: { TValue }, ...: number | nil): { TValue }
    local length = #array
    local result = table.clone(array)
    local indices = {}

    for index = 1, select("#", ...) do
        local value = select(index, ...)

        if value ~= nil then
            indices[if value < 0 then length + 1 + value else value + 1] = true
        end
    end

    for index = length, 1, -1 do
        if indices[index] then
            table.remove(result, index)
        end
    end

    return result
end

return removeIndices

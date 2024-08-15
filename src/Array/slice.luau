--!strict
--!native

local types = require(script.Parent.types)

type Array<T> = types.Array<T>

--[[
	Slices an array.

	```lua
	local array = { 1, 2, 3, 4, 5 }

	local new = slice(array, 2, 3) -- { 2, 3 }
	local new = slice(array, -2, -1) -- { 3, 4 }
	local new = slice(array, 3) -- { 3, 4, 5 }
	```
]]
local function slice<T>(array: Array<T>, from: number?, to: number?): Array<T>
    local length = #array
    local result = {}

    for index = if from then if from < 0 then length + 1 + from else from + 1 else 1, if to then if to < 0 then length + 1 + to else to + 1 else length do
        table.insert(result, array[index])
    end

    return result
end

return slice

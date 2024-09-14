--!strict
--!native
--!optimize 2

--[[
	Checks whether some item in the array passes the predicate.

	```lua
	local array = { 1, 2, 3 }

	local value = some(array, function(item, index)
		return item > 1
	end) -- true

	local value = some(array, function(item, index)
		return item > 3
	end) -- false
	```
]]
local function some<TValue>(array: { TValue }, predicate: (value: TValue, index: number, arrayRef: { TValue }) -> any): boolean
    for index = 1, #array do
        if predicate(array[index], index, array) then
            return true
        end
    end

    return false
end

return some

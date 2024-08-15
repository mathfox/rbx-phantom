--!strict
--!native

--[[
	Freezes the entire array, making it read-only, including all nested values.

	```lua
	local array = { 1, 2, 3, { 4, 5, 6 } }

	local new = deepFreeze(array)

	new[1] = 4 -- error!
	new[4][1] = 7 -- error!
	```
]]
local function deepFreeze<T>(array: { T }): { T }
    table.freeze(array)

    for index = 1, #array do
        local value = array[index]

        if type(value) == "table" then
            require(script.Parent.Parent.Shared.deepFreeze)(value)
        end
    end

    return array
end

return deepFreeze

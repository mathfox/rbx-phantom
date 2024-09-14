--!strict
--!native
--!optimize 2

local find = require(script.Parent.find)

--[[
	Checks whether the array contains the value.
    This is a wrapper around `find`.

	```lua
	local array = { "hello", "world", "goodbye" }

	local value = includes(array, "hello") -- true
	local value = includes(array, "phantom") -- false
	local value = includes(array, "hello", 2) -- false
	```
]]
local function includes<TValue>(array: { TValue }, value: TValue, from: number | nil): boolean
    return find(array, value, from) ~= nil
end

return includes

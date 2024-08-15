--!strict
--!native

local setTypes = require(script.Parent.Parent.Set.types)
local types = require(script.Parent.types)

type Set<T> = setTypes.Set<T>
type Array<T> = types.Array<T>

--[[
	Converts an array to a set.

	```lua
	local array = { "a", "b", "b", "c", "d" }

	local set = toSet(array) -- { a = true, b = true, c = true, d = true }
	```
]]
local function toSet<T>(array: Array<T>): Set<T>
    local set: Set<T> = {}

    for _, value in array do
        set[value] = true
    end

    return set
end

return toSet

--!strict
--!native
--!optimize 2

--[[
	Converts an array to a set.

	```lua
	local array = { "a", "b", "b", "c", "d" }

	local set = toSet(array) -- { a = true, b = true, c = true, d = true }
	```
]]
local function toSet<TValue>(array: { TValue }): { [TValue]: true }
    local set: { [TValue]: true } = {}

    for _, value in array do
        set[value] = true
    end

    return set
end

return toSet

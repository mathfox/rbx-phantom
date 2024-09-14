--!strict
--!native
--!optimize 2

--[[
	Reverses the order of the items in an array in-place.

	```lua
	local array = { 1, 2, 3 }

	local new = reverse(array) -- { 3, 2, 1 }
	```
]]
local function reverse<TValue>(array: { TValue }): { TValue }
    local n = #array
    local i = 1

    while i < n do
        array[i], array[n] = array[n], array[i]
        i += 1
        n -= 1
    end

    return array
end

return reverse

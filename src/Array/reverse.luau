--!strict
--!native

local types = require(script.Parent.types)

type Array<T> = types.Array<T>

--[[
	Reverses the order of the items in an array.

	```lua
	local array = { 1, 2, 3 }

	local new = Reverse(array) -- { 3, 2, 1 }
	```
]]
local function reverse<T>(t: Array<T>): Array<T>
    local n = #t
    local i = 1

    while i < n do
        t[i], t[n] = t[n], t[i]
        i = i + 1
        n = n - 1
    end

    return t
end

return reverse

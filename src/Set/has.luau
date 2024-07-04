--!strict

local types = require(script.Parent.types)

type Set<T> = types.Set<T>

@native
local function has<T>(set: Set<T>, value: any): boolean
	return set[value] == true
end

return has

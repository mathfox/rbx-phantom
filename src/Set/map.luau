--!strict

local types = require(script.Parent.types)

type Set<T> = types.Set<T>

@native
local function map<T, R>(set: Set<T>, mapper: (T, Set<T>) -> R): Set<R>
	local result = {} :: Set<R>

	for key in set do
        result[mapper(key, set)] = true
	end

	return result
end

return map

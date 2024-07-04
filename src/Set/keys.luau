--!strict

local types = require(script.Parent.types)

type Set<T> = types.Set<T>

@native
local function keys<T>(set: Set<T>): { T }
    local result = {}

	for key in set do
        table.insert(result, key)
	end

	return result
end

return keys

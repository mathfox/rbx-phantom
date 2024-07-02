--!strict

local types = require(script.Parent.types)

type Set<T> = types.Set<T>

@native
local function fromArray<T>(array: { T }): Set<T>
	local result = table.create(#array)

	for _, value in array do
		result[value] = true
	end

	return result
end

return fromArray

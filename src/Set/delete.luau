--!strict

local types = require(script.Parent.types)

type Set<T> = types.Set<T>

@native
local function delete<T>(set: Set<T>, ...: T): Set<T>
	for _, value in { ... } do
		set[value] = nil
	end

	return set
end

return delete

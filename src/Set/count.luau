--!strict

local types = require(script.Parent.types)

type Set<T> = types.Set<T>

local function count<T>(
	set: Set<T>,
	predicate: ((item: T, set: { [T]: boolean }) -> boolean?)?
): number
	local counter = 0

	predicate = if type(predicate) == "function" then predicate else Util.func.truthy

	for item, _ in pairs(set) do
		if predicate(item, set) then
			counter += 1
		end
	end

	return counter
end

return count

--!strict

@native
local function cloneDeep<T>(array: { T }): { T }
	local result = table.clone(array)

	for index, value in array do
		if type(value) == "table" then
			result[index] = cloneDeep(value) :: any
		end
	end

	return result
end

return cloneDeep

--!strict
--[=[
	@prop None None
	@within Phantom

	Luau can't distinguish between a nil value and a non-existent value. This
	constant is used to represent a non-existent value. It can be used in methods
	like `Array.Concat` or `Dictionary.Merge` to remove the value from the result.
]=]
local None = newproxy(true)

export type None = typeof(None)

getmetatable(None :: any).__tostring = function()
	return "Phantom.None"
end

return None

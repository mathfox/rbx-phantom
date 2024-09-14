--!strict
--!native
--!optimize 2

--[[
	Luau can't distinguish between a nil value and a non-existent value.
    This constant is used to represent a non-existent value.
    It can be used in methods like `Map.merge` to remove the value from the result.
]]
local None = setmetatable({}, {
    __tostring = function()
        return "<Phantom.None>"
    end,
})

export type None = typeof(None)

return None

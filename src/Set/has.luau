--!strict
--!native

local types = require(script.Parent.types)

type Set<T> = types.Set<T>

local function has(set: Set<unknown>, value: unknown): boolean
    return set[value] == true
end

return has

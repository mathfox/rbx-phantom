--!strict
--!native

local types = require(script.Parent.types)

type Set<T> = types.Set<T>

local function has(set: Set<unknown>, ...: unknown): boolean
    for index = 1, select("#", ...) do
        if not set[select(index, ...)] then
            return false
        end
    end

    return true
end

return has

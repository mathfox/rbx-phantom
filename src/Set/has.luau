--!strict
--!native

local types = require(script.Parent.types)

type Set<T> = types.Set<T>

local function has(set: Set<unknown>, ...: unknown): boolean
    for index = 1, select("#", ...) do
        local value = select(index, ...)

        if value ~= nil and not set[value] then
            return false
        end
    end

    return true
end

return has

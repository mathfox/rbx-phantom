--!strict
--!native

local types = require(script.Parent.types)

type Set<T> = types.Set<T>

local function add<T>(set: Set<T>, ...: T): Set<T>
    for index = 1, select("#", ...) do
        set[select(index, ...)] = true
    end

    return set
end

return add

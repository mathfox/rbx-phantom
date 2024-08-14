--!strict
--!native

local types = require(script.Parent.types)

type Set<T> = types.Set<T>

local function delete<T>(set: Set<T>, ...: T): Set<T>
    for index = 1, select("#", ...) do
        set[select(index, ...)] = nil
    end

    return set
end

return delete

--!strict
--!native

local types = require(script.Parent.types)

type Set<T> = types.Set<T>

local function delete<T>(set: Set<T>, ...: T | nil): Set<T>
    for index = 1, select("#", ...) do
        local value = select(index, ...)

        if value ~= nil then
            set[value] = nil
        end
    end

    return set
end

return delete

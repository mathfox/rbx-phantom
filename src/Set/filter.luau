--!strict
--!native

local types = require(script.Parent.types)

type Set<T> = types.Set<T>

--[=[
    Filters a set using a predicate. Any items that do not pass the predicate will be removed from the set.

    ```lua
    local set = { hello = true, world = true }

    local newSet = filter(set, function(value)
        return value ~= "hello"
    end) -- { world = true }
    ```
]=]
local function filter<T, R>(
    set: Set<T>,
    predicate: (value: T, set: Set<T>) -> R
): Set<R>
    local result: Set<R> = {}

    for value in set do
        if predicate(value, set) then
            result[value :: any] = true
        end
    end

    return result
end

return filter

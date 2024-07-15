--!strict

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
local function filter<T>(
    set: Set<T>,
    predicate: (value: T, set: Set<T>) -> any
): Set<T>
    local result: Set<T> = {}

    for key, _ in pairs(set) do
        if predicate(key, set) then
            result[key] = true
        end
    end

    return result
end

return filter

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
local function filter<T>(
    set: Set<T>,
    predicate: (item: T, set: Set<T>) -> unknown
): Set<T>
    local result: Set<T> = {}

    for item in set do
        if predicate(item, set) then
            result[item] = true
        end
    end

    return result
end

return filter

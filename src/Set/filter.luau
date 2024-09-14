--!strict
--!native
--!optimize 2

--[[
    Filters a set using a predicate. Any items that do not pass the predicate will be removed from the set.

    ```lua
    local set = { hello = true, world = true }

    local newSet = filter(set, function(value)
        return value ~= "hello"
    end) -- { world = true }
    ```
]]
local function filter<TValue>(
    set: { [TValue]: true },
    predicate: (value: TValue, setRef: { [TValue]: true }) -> any
): { [TValue]: true }
    local result: { [TValue]: true } = {}

    for value in set do
        if predicate(value, set) then
            result[value :: any] = true
        end
    end

    return result
end

return filter

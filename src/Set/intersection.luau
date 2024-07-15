--!strict
--!native

local types = require(script.Parent.types)

type Set<T> = types.Set<T>

--[=[
    Creates the intersection of multiple sets. The intersection
    is when both sets have a value in common. Unmatched values
    are discarded.

    ```lua
    local set1 = { hello = true, world = true }
    local set2 = { world = true, universe = true }

    local int = intersection(set1, set2) -- { world = true }
    ```
]=]
local function intersection(...: Set<unknown>): Set<unknown>
    local setCount = select("#", ...)
    local firstSet = select(1, ...)

    local result: Set<unknown> = {}

    for key, _ in pairs(firstSet) do
        local intersects = true

        for index = 2, setCount do
            local set = select(index, ...)

            if set[key] ~= true then
                intersects = false
                break
            end
        end

        if intersects then
            result[key] = true
        end
    end

    return result
end

return intersection

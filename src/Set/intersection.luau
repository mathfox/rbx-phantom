--!strict
--!native

local types = require(script.Parent.types)

type Set<T> = types.Set<T>

--[=[
    Creates the intersection of multiple sets.
    The intersection is when both sets have a value in common.
    Unmatched values are discarded.

    ```lua
    local set1 = { hello = true, world = true }
    local set2 = { world = true, universe = true }

    local int = intersection(set1, set2) -- { world = true }
    ```
]=]
local function intersection(...: Set<unknown> | nil): Set<unknown>
    local result: Set<unknown> = {}

    local length = select("#", ...)
    local firstIndex = 1
    local firstSet

    while not firstSet do
        firstSet = select(firstIndex, ...)

        if not firstSet and firstIndex == length then
            return result
        end

        firstIndex += 1
    end

    for item in firstSet do
        local intersects = true

        for index = firstIndex, length do
            local set = select(index, ...)

            if set ~= nil and not set[item] then
                intersects = false

                break
            end
        end

        if intersects then
            result[item] = true
        end
    end

    return result
end

return intersection

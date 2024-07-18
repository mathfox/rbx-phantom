--!strict
--!native

local types = require(script.Parent.types)

type Set<T> = types.Set<T>

--[=[
    Combines one or more sets into a single set.

    ```lua
    local set1 = { hello = true, world = true }
    local set2 = { cat = true, dog = true, hello = true }

    local newSet = merge(set1, set2) -- { hello = true, world = true, cat = true, dog = true }
    ```
]=]
local function merge<T>(...: any): Set<T>
    local result = {}

    for setIndex = 1, select("#", ...) do
        local set = select(setIndex, ...)

        for item in set do
            result[item] = true
        end
    end

    return result
end

return merge

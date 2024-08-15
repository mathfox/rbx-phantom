--!strict
--!native

local types = require(script.Parent.types)

type Set<T> = types.Set<T>

--[[
    Combines one or more sets into a single set.

    ```lua
    local set1 = { hello = true, world = true }
    local set2 = { cat = true, dog = true, hello = true }

    local newSet = merge(set1, set2) -- { hello = true, world = true, cat = true, dog = true }
    ```
]]
local function merge<T>(...: Set<T> | nil): Set<T>
    local result: Set<T> = {}

    for index = 1, select("#", ...) do
        local set = select(index, ...)

        if set ~= nil then
            for value in set do
                result[value] = true
            end
        end
    end

    return result
end

return merge

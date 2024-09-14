--!strict
--!native
--!optimize 2

local None = require(script.Parent.Parent.None)

--[[
    Merges the given maps into a single map.
    If the value is `None`, it will be removed from the result.
    The parameters may be any number of maps or `nil`.
    Non-maps will be ignored.

    ```lua
    local map1 = { hello = "roblox", goodbye = "world" }
    local map2 = { goodbye = "goodbye" }

    local merged = merge(map1, map2) -- { hello = "roblox", goodbye = "goodbye" }
    ```
]]
local function merge<TKey, TValue>(...: { [TKey]: TValue } | nil): { [TKey]: TValue }
    local result: { [TKey]: TValue } = {}

    for index = 1, select("#", ...) do
        local mapValue = select(index, ...)

        if mapValue ~= nil then
            for key, value in mapValue do
                result[key] = if value == None then nil else value
            end
        end
    end

    return result
end

return merge

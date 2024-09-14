--!strict
--!native
--!optimize 2

local toSet = require(script.Parent.Parent.Array.toSet)

--[[
    Removes the given values from the given map.

    ```lua
    local map = { hello = "world", cat = "meow", unicorn = "rainbow", goodbye = "world" }

    local withoutWorld = removeValues(map, "world") -- { cat = "meow", unicorn = "rainbow" }
    local onlyWorld = removeValues(map, "meow", "rainbow") -- { hello = "world", goodbye = "world" }
    ```
]]
local function removeValues<TKey, TValue>(map: { [TKey]: TValue }, ...: TValue | nil): { [TKey]: TValue }
    local values = toSet({ ... })
    local result = {}

    for key, value in map do
        if not values[value] then
            result[key] = value
        end
    end

    return result
end

return removeValues

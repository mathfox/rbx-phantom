--!strict
--!native

local toSet = require(script.Parent.Parent.Array.toSet)

--[[
    Removes the given values from the given dictionary.

    ```lua
    local dictionary = { hello = "world", cat = "meow", unicorn = "rainbow", goodbye = "world" }

    local withoutWorld = RemoveValues(dictionary, "world") -- { cat = "meow", unicorn = "rainbow" }
    local onlyWorld = RemoveValues(dictionary, "meow", "rainbow") -- { hello = "world", goodbye = "world" }
    ```
]]
local function removeValues<K, V>(dictionary: { [K]: V }, ...: V): { [K]: V }
    local values = toSet({ ... })
    local result = {}

    for key, value in pairs(dictionary) do
        if not values[value] then
            result[key] = value
        end
    end

    return result
end

return removeValues

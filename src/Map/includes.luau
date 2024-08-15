--!strict
--!native

local types = require(script.Parent.types)

type Map<K, V> = types.Map<K, V>

--[[
    Checks whether or not the given dictionary includes the given value.

    ```lua
    local dictionary = { hello = "roblox", goodbye = "world" }

    local includesRoblox = includes(dictionary, "roblox") -- true
    local includesCat = includes(dictionary, "cat") -- false
    ```
]]
local function includes<K, V>(map: Map<K, V>, value: V): boolean
    for _, v in map do
        if v == value then
            return true
        end
    end

    return false
end

return includes

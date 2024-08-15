--!strict
--!native

local types = require(script.Parent.types)

type Map<K, V> = types.Map<K, V>

--[[
    Checks whether or not the given dictionary has the given key.

    ```lua
    local dictionary = { hello = "roblox", goodbye = "world" }

    local hasHello = Has(dictionary, "hello") -- true
    local hasCat = Has(dictionary, "cat") -- false
    ```
]]
local function has<K>(map: Map<K, unknown>, ...: K): boolean
    for index = 1, select("#", ...) do
        local value = select(index, ...)

        if value ~= nil and map[value] == nil then
            return false
        end
    end

    return true
end

return has

--!strict
--!native
--!optimize 2

--[[
    Checks whether or not the given map has the given key.

    ```lua
    local map = { hello = "roblox", goodbye = "world" }

    local hasHello = has(map, "hello") -- true
    local hasCat = has(map, "cat") -- false
    ```
]]
local function has<TKey>(map: { [TKey]: unknown }, ...: TKey): boolean
    for index = 1, select("#", ...) do
        local value = select(index, ...)

        if value ~= nil and map[value] == nil then
            return false
        end
    end

    return true
end

return has

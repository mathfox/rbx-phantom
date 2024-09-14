--!strict
--!native
--!optimize 2

--[[
    Checks whether or not the given map includes the given value.

    ```lua
    local map = { hello = "roblox", goodbye = "world" }

    local includesRoblox = includes(map, "roblox") -- true
    local includesCat = includes(map, "cat") -- false
    ```
]]
local function includes<TValue>(map: { [unknown]: TValue }, ...): boolean
    for index = 1, select("#", ...) do
        local value = select(index, ...)

        if value ~= nil then
            local found = false

            for _, v in map do
                if value == v then
                    found = true
                    break
                end
            end

            if not found then
                return false
            end
        end
    end

    return true
end

return includes

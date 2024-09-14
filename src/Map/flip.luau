--!strict
--!native
--!optimize 2

--[[
    Flips a map. Keys become values and values become keys.

    ```lua
    local map = { hello = "roblox", goodbye = "world" }

    flip(map) -- { world = "goodbye", roblox = "hello" }
    ```
]]
local function flip<TKey, TValue>(map: { [TKey]: TValue }): { [TValue]: TKey }
    local result = {}

    for key, value in map do
        result[value] = key
    end

    return result
end

return flip

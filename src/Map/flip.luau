--!strict
--!native

--[[
    Flips a dictionary. Keys become values and values become keys.

    ```lua
    local dictionary = { hello = "roblox", goodbye = "world" }

    local new = flip(dictionary) -- { world = "goodbye", roblox = "hello" }
    ```
]]
local function flip<K, V>(map: { [K]: V }): { [V]: K }
    local result = {}

    for key, value in map do
        result[value] = key
    end

    return result
end

return flip

--!strict
--!native
--!optimize 2

--[[
    Returns a map with the given keys.

    ```lua
    local map = { hello = "world", cat = "meow", dog = "woof", unicorn = "rainbow" }
    local withoutCatDog = withKeys(map, "cat", "dog") -- { cat = "meow", dog = "woof" }
    ```
]]
local function withKeys<TKey, TValue>(map: { [TKey]: TValue }, ...: TKey): { [TKey]: TValue }
    local result = {}

    for index = 1, select("#", ...) do
        local key = select(index, ...)

        result[key] = map[key]
    end

    return result
end

return withKeys

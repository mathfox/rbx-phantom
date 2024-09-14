--!strict
--!native
--!optimize 2

--[[
    Removes the given keys from the given map.

    ```lua
    local map = { hello = "world", cat = "meow", dog = "woof", unicorn = "rainbow" }

    local withoutCatDog = removeKeys(map, "cat", "dog") -- { hello = "world", unicorn = "rainbow" }
    ```
]]
local function removeKeys<TKey, TValue>(map: { [TKey]: TValue }, ...: TKey | nil): { [TKey]: TValue }
    local result = table.clone(map)

    for index = 1, select("#", ...) do
        local key = select(index, ...)
        if key ~= nil then
            result[key] = nil
        end
    end

    return result
end

return removeKeys

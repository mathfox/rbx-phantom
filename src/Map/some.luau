--!strict
--!native
--!optimize 2

--[[
    Checks whether or not the predicate returned true for any value in the map.

    ```lua
    local map = { hello = "world", cat = "meow", unicorn = "rainbow" }

    local hasMeow = some(map, function(value)
        return value == "meow"
    end) -- true

    local hasDog = some(map, function(_, key)
        return key == "dog"
    end) -- false
    ```
]]
local function some<TKey, TValue>(
    map: { [TKey]: TValue },
    predicate: (value: TValue, key: TKey, mapRef: { [TKey]: TValue }) -> any
): boolean
    for key, value in map do
        if predicate(value, key, map) then
            return true
        end
    end

    return false
end

return some

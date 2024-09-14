--!strict
--!native
--!optimize 2

--[[
    Filters a map using a predicate. Any items that do not pass the predicate will be removed from the map.

    ```lua
    local map = { hello = "world", goodbye = "goodbye" }

    local result = filter(map, function(value, key)
        return value == "world"
    end) -- { hello = "world" }
    ```
]]
local function filter<TKey, TValue>(
    map: { [TKey]: TValue },
    predicate: (value: TValue, key: TKey, mapRef: { [TKey]: TValue }) -> any
): { [TKey]: TValue }
    local result = {}

    for key, value in map do
        if predicate(value, key, map) then
            result[key] = value
        end
    end

    return result
end

return filter

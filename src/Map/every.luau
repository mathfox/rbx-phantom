--!strict
--!native
--!optimize 2

--[[
    Checks whether every item in the map passes the predicate.

    ```lua
    local map = { hello = "world", goodbye = "world" }

    local value = every(map, function(value, key)
        return value == "world"
    end) -- true

    local value = every(map, function(value, key)
        return value == "hello"
    end) -- false
    ```
]]
local function every<TKey, TValue>(
    map: { [TKey]: TValue },
    predicate: (
        value: TValue,
        key: TKey,
        mapRef: { [TKey]: TValue }
    ) -> any
): boolean
    for key, value in map do
        if not predicate(value, key, map) then
            return false
        end
    end

    return true
end

return every

--!strict
--!native

--[[
    Checks whether every item in the dictionary passes the predicate.

    ```lua
    local dictionary = { hello = "world", goodbye = "world" }

    local value = Every(dictionary, function(value, key)
        return value == "world"
    end) -- true

    local value = Every(dictionary, function(value, key)
        return value == "hello"
    end) -- false
    ```
]]
local function every<K, V>(
    map: { [K]: V },
    predicate: (
        value: V,
        key: K,
        map: { [K]: V }
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

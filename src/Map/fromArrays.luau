--!strict
--!native
--!optimize 2

--[[
    Creates a map from the given arrays, where the first array is used
    as keys and the second array is used as values.

    ```lua
    local keys = { "hello", "goodbye" }
    local values = { "roblox", "world" }

    local map = fromArrays(keys, values) -- { hello = "roblox", goodbye = "world" }
    ```
]]
local function fromArrays<TKey, TValue>(keys: { TKey }, values: { TValue }): { [TKey]: TValue }
    local result = {}

    for i = 1, #keys do
        result[keys[i]] = values[i]
    end

    return result
end

return fromArrays

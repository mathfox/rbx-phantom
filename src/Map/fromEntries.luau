--!strict
--!native
--!optimize 2

--[[
    Creates a dictionary from the given key-value pairs.

    ```lua
    local entries = { { "hello", "roblox" }, { "goodbye", "world" } }

    local dictionary = fromEntries(entries) -- { hello = "roblox", goodbye = "world" }
    ```
]]
local function fromEntries<TKey, TValue>(entries: { [number]: { [number]: TKey | TValue } }): { [TKey]: TValue }
    local result = {}

    for _, entry in entries do
        result[entry[1]] = entry[2]
    end

    return result :: any
end

return fromEntries

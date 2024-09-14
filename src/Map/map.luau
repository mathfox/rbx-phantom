--!strict
--!native
--!optimize 2

--[[
    Maps the map using the mapper function.
    The mapper function can return a value and a key.
    If the mapper function does not return a key, the original key will be used.

    ```lua
    local sourceMap = { hello = 10, goodbye = 20 }

    local new = map(sourceMap, function(value, key)
        return value * 2, key .. "!"
    end) -- { ["hello!"] = 20, ["goodbye!"] = 40 }

    local new = map(sourceMap, function(value, key)
        return value * 10
    end) -- { hello = 100, goodbye = 200 }
    ```
]]
local function map<TKey, TValue, TOutputKey, TOutputValue>(
    map: { [TKey]: TValue },
    mapper: (
        value: TValue,
        key: TKey,
        mapRef: { [TKey]: TValue }
    ) -> (TOutputValue, TOutputKey?)
): { [TOutputKey | TKey]: TOutputValue }
    local mapped: { [TOutputKey | TKey]: TOutputValue } = {}

    for key, value in map do
        local mappedValue, mappedKey = mapper(value, key, map)

        mapped[mappedKey or key] = mappedValue
    end

    return mapped
end

return map

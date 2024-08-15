--!strict
--!native

local types = require(script.Parent.types)

type Map<K, V> = types.Map<K, V>

--[[
    Maps the dictionary using the mapper function.
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
local function map<K, V, K2, V2>(
    sourceMap: Map<K, V>,
    mapper: (
        value: V,
        key: K,
        sourceMap: Map<K, V>
    ) -> (V2, K2?)
): { [K2 | K]: V2 }
    local mapped: Map<K2 | K, V2> = {}

    for key, value in sourceMap do
        local mappedValue, mappedKey = mapper(value, key, sourceMap)
        mapped[mappedKey or key] = mappedValue
    end

    return mapped
end

return map

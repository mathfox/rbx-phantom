--!strict
--!native

local function entries<K, V>(object: { [K]: V }): { [number]: { [number]: K | V } }
    local result = {}

    for key, value in object do
        table.insert(result, { key, value :: any })
    end

    return result
end

return entries

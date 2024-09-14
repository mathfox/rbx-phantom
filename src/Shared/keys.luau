--!strict
--!native
--!optimize 2

local function keys<TKey>(object: { [TKey]: unknown }): { TKey }
    local result = {}

    for key in object do
        table.insert(result, key)
    end

    return result
end

return keys

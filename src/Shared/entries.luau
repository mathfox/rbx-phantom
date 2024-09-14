--!strict
--!native
--!optimize 2

local function entries<TKey, TValue>(object: { [TKey]: TValue }): { [number]: { [number]: TKey | TValue } }
    local result = {}

    for key, value in object do
        table.insert(result, { key, value :: any })
    end

    return result
end

return entries

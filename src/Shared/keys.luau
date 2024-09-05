--!strict
--!native
--!optimize 2

local function keys<K>(object: { [K]: unknown }): { K }
    local result = {}

    for key in object do
        table.insert(result, key)
    end

    return result
end

return keys

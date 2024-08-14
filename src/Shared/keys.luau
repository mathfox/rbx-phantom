--!strict
--!native

local function keys<K>(object: { [K]: any }): { K }
    local result = {}

    for key in object do
        table.insert(result, key)
    end

    return result
end

return keys

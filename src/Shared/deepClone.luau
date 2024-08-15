--!strict
--!native

local function deepClone<K, V>(object: { [K]: V }): { [K]: V }
    local result = table.clone(object)

    for key, value in object do
        if type(value) == "table" then
            result[key] = deepClone(value) :: any
        end
    end

    return result
end

return deepClone

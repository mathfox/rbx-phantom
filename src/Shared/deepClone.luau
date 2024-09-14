--!strict
--!native
--!optimize 2

local function deepClone<TKey, TValue>(object: { [TKey]: TValue }): { [TKey]: TValue }
    local result = table.clone(object)

    for key, value in object do
        if type(value) == "table" then
            result[key] = deepClone(value) :: any
        end
    end

    return result
end

return deepClone

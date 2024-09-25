--!strict
--!native
--!optimize 2

--[[
    Clones both the keys and values
]]
local function deepClone<TKey, TValue>(object: { [TKey]: TValue }): { [TKey]: TValue }
    local result = table.clone(object)

    for key, value in object do
        if type(key) == "table" then
            result[key] = nil

            key = deepClone(key) :: any

            result[key] = value
        end

        if type(value) == "table" then
            result[key] = deepClone(value) :: any
        end
    end

    return result
end

return deepClone

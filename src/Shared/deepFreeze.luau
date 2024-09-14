--!strict
--!native
--!optimize 2

local function deepFreeze<TKey, TValue>(object: { [TKey]: TValue }): { [TKey]: TValue }
    table.freeze(object)

    for key, value in object do
        if type(value) == "table" then
            deepFreeze(value)
        end
    end

    return object
end

return deepFreeze

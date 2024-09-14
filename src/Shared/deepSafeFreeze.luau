--!strict
--!native
--!optimize 2

local function deepSafeFreeze<TKey, TValue>(object: { [TKey]: TValue }): { [TKey]: TValue }
    if not table.isfrozen(object) then
        table.freeze(object)
    end

    for key, value in object do
        if type(value) == "table" then
            deepSafeFreeze(value)
        end
    end

    return object
end

return deepSafeFreeze

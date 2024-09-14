--!strict
--!native
--!optimize 2

local function safeFreeze<TKey, TValue>(object: { [TKey]: TValue }): { [TKey]: TValue }
    if not table.isfrozen(object) then
        table.freeze(object)
    end

    return object
end

return safeFreeze

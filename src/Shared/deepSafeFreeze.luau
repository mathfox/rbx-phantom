--!strict
--!native

local function deepSafeFreeze<K, V>(object: { [K]: V }): { [K]: V }
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

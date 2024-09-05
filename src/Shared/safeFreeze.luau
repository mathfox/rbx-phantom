--!strict
--!native
--!optimize 2

local function safeFreeze<K, V>(object: { [K]: V }): { [K]: V }
    if not table.isfrozen(object) then
        table.freeze(object)
    end

    return object
end

return safeFreeze

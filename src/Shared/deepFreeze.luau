--!strict
--!native
--!optimize 2

local function deepFreeze<K, V>(object: { [K]: V }): { [K]: V }
    table.freeze(object)

    for key, value in object do
        if type(value) == "table" then
            deepFreeze(value)
        end
    end

    return object
end

return deepFreeze

--!strict
--!native
local isArray = require(script.Parent.Parent.Array.isArray)

local function deepFreeze<K, V>(object: { [K]: V }): { [K]: V }
    if isArray(object) then
        require(script.Parent.Parent.Array.deepFreeze :: any)(object :: any)
    end

    for key, value in object do
        if type(key) == "table" then
            table.freeze(key)

            deepFreeze(key)
        end

        if type(value) == "table" then
            table.freeze(value)

            deepFreeze(value)
        end
    end

    return object
end

return deepFreeze

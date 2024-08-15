--!strict
--!native

local function isMap(value: unknown): boolean
    if type(value) ~= "table" then
        return false
    end

    return #value :: any == 0
end

return isMap

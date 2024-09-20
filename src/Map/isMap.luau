--!strict
--!native
--!optimize 2

local function isMap(value: unknown): boolean
    if type(value) ~= "table" then
        return false
    end

    --return #value :: any == 0
    return true
end

return isMap

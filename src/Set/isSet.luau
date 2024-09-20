--!strict
--!native
--!optimize 2

local function isSet(input: unknown): boolean
    if type(input) ~= "table" then
        return false
    end

    -- Ensure we do not deal with Array-like
    if #(input :: any) > 0 then
        return false
    end

    for _, value in input :: any do
        if type(value) ~= "boolean" then
            return false
        end
    end

    return true
end

return isSet

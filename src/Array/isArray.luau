--!strict
--!native

--[[
    Checks if the given object is an array.

    ```lua
    local array = { 1, 2, 3 }
    local dictionary = { hello = "world" }
    local mixed = { 1, 2, hello = "world" }

    Array.isArray(array) -- true
    Array.isArray(dictionary) -- false
    Array.isArray(mixed) -- false
    ```
]]
local function isArray(value: any): boolean
    if type(value) ~= "table" then
        return false
    end

    if next(value) == nil then
        -- an empty table is an empty array
        return true
    end

    local length = #value

    if length == 0 then
        return false
    end

    local count = 0
    local sum = 0

    for key in value do
        if type(key) ~= "number" then
            return false
        end

        if key % 1 ~= 0 or key < 1 then
            return false
        end

        count += 1
        sum += key
    end

    return sum == (count * (count + 1) / 2)
end

return isArray

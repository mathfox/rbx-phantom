--!strict
--!native

local function keys(array: { unknown }): { number }
    local size = #array
    local result = table.create(size, 1)

    for index = 2, size do
        result[index] = index
    end

    return result
end

return keys

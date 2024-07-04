local function keys(array)
    local size = #array
    local result = table.create(size, 1)

    for index = 2, size do
        result[index] += result[index - 1]
    end

    return result
end

return keys

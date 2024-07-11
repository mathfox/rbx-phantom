local function values<T>(array: { [any]: T }): { T }
    local result = table.create(#array)

    for _, value in array do
        table.insert(result, value)
    end

    return result
end

return values

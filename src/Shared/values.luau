--!strict

@native
local function values<V>(object: { [any]: V }): { V }
    local result = {}

    for _, value in object do
        table.insert(result, value)
    end

    return result
end

return values

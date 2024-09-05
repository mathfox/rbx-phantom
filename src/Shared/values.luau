--!strict
--!native
--!optimize 2

local function values<V>(object: { [unknown]: V }): { V }
    local result = {}

    for _, value in object do
        table.insert(result, value)
    end

    return result
end

return values

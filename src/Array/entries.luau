--!strict
--!native
--!optimize 2

--[[
    Differs from shared version, allowing for [number, nil] entries.
    Also pre-allocates the memory before inserting the entries.
]]
local function entries<TValue>(array: { TValue }): { { [number]: number | TValue } }
    local size = #array
    local result = table.create(size)

    for index = 1, size do
        table.insert(result, { index - 1, array[index] :: any })
    end

    return result
end

return entries

--!strict
--!native
--!optimize 2

--[[
    This implementation differs from the shared one.
    It pre-allocates the table size using `table.create`.
    The indexes are 0-based.
]]
local function keys(array: { unknown }): { number }
    local size = #array
    local result = table.create(size, 0)

    for index = 2, size do
        result[index] = index - 1
    end

    return result
end

return keys

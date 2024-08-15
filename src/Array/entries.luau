--!strict
--!native

--[[
    Differs from shared version, allowing for [number, nil] entries.
]]
local function entries<T>(array: { T }): { [number]: { [number]: T | number } }
    local size = #array
    local result = table.create(size)

    for index = 1, size do
        table.insert(result, { index, array[index] :: any })
    end

    return result
end

return entries

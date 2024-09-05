--!strict
--!native
--!optimize 2

local types = require(script.Parent.types)
local sharedTypes = require(script.Parent.Parent.Shared.types)

--[[
    Differs from shared version, allowing for [number, nil] entries.
]]
local function entries<TValue>(array: types.Array<TValue>): types.Array<sharedTypes.Table<number, number | TValue>>
    local size = #array
    local result = table.create(size)

    for index = 1, size do
        table.insert(result, { index, array[index] :: any })
    end

    return result
end

return entries

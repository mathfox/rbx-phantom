--!strict
--!native
--!optimize 2

local isArray = require(script.Parent.isArray)
local types = require(script.Parent.types)

type Array<T> = types.Array<T>

--[[
    @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
]]
local function concat<TValue>(...: Array<TValue> | TValue | nil): Array<TValue>
    local result: Array<TValue> = {}

    for index = 1, select("#", ...) do
        local value = select(index, ...)

        if value ~= nil then
            if isArray(value) then
                table.move(value, 1, #value, #result + 1, result)
            else
                table.insert(result, value)
            end
        end
    end

    return result
end

return concat

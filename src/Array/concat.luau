--!strict
--!native

local isArray = require(script.Parent.isArray)
local types = require(script.Parent.types)

type Array<T> = types.Array<T>

--[[
    @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
]]
local function concat<T>(...: T | Array<T>): Array<T>
    local result = {}

    for index = 1, select("#", ...) do
        local value = select(index, ...)

        if isArray(value) then
            for index = 1, #value do
                table.insert(result, value[index])
            end
        else
            table.insert(result, value)
        end
    end

    return result
end

return concat

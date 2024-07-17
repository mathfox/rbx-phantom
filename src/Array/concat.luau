--!strict
--!native

local None = require(script.Parent.Parent.None)
local types = require(script.Parent.types)

type Array<T> = types.Array<T>

--[[
    @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
]]
local function concat<T>(array: Array<T>, ...: any): Array<T>
    local result = table.clone(array)

    for index = 2, select("#", ...) do
        local value = select(index, ...)

        if type(value) == "table" then
            for _, item in ipairs(value) do
                if item ~= None then
                    table.insert(result, item)
                end
            end
        elseif value ~= None then
            table.insert(result, value)
        end
    end

    return result
end

return concat

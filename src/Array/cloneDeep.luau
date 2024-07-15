--!strict
--!native

local types = require(script.Parent.types)

type Array<T> = types.Array<T>

local function cloneDeep<T>(array: Array<T>): Array<T>
    local result = table.clone(array)

    for index, value in array do
        if type(value) == "table" then
            result[index] = cloneDeep(value) :: any
        end
    end

    return result
end

return cloneDeep

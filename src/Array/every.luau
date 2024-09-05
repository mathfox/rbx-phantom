--!strict
--!native
--!optimize 2

local types = require(script.Parent.types)

type Array<T> = types.Array<T>

local function every<TValue>(
    array: Array<TValue>,
    predicate: (value: TValue, index: number, array: Array<TValue>) -> unknown
): boolean
    for index = 1, #array do
        if not predicate(array[index], index, array) then
            return false
        end
    end

    return true
end

return every

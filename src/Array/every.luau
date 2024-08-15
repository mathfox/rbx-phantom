--!strict
--!native

local types = require(script.Parent.types)

type Array<T> = types.Array<T>

local function every<T>(
    array: Array<T>,
    predicate: (
        value: T,
        index: number,
        array: Array<T>
    ) -> unknown
): boolean
    for index = 1, #array do
        if not predicate(array[index], index, array) then
            return false
        end
    end

    return true
end

return every

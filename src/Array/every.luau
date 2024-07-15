--!strict
--!native

local types = require(script.Parent.types)

type Array<T> = types.Array<T>

local function every<T>(
    array: Array<T>,
    predicate: (value: T, index: number, array: Array<T>) -> any
): boolean
    for index, value in ipairs(array) do
        if not predicate(value, index, array) then
            return false
        end
    end

    return true
end

return every

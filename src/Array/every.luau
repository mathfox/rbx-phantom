--!strict
--!native
--!optimize 2

local function every<TValue>(
    array: { TValue },
    predicate: (value: TValue, index: number, arrayRef: { TValue }) -> unknown
): boolean
    for index = 1, #array do
        if not predicate(array[index], index, array) then
            return false
        end
    end

    return true
end

return every

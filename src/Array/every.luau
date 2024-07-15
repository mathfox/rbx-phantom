--!strict
--!native

local function every<T>(
    array: { T },
    predicate: (value: T, index: number, array: { T }) -> any
): boolean
    for index, value in ipairs(array) do
        if not predicate(value, index, array) then
            return false
        end
    end

    return true
end

return every

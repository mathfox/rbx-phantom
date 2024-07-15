--!strict
--!native

local types = require(script.Parent.types)

type Set<T> = types.Set<T>

local function fromArray<T>(array: { T }): Set<T>
    local result = (table.create(#array) :: any) :: Set<T>

    for _, value in array do
        result[value] = true
    end

    return result
end

return fromArray

--!strict
--!native

local types = require(script.Parent.types)

type Set<T> = types.Set<T>

local function fromArray<T>(array: { T }): Set<T>
    local result = {} :: Set<T>

    for index = 1, #array do
        local value = array[index]

        if value ~= nil then
            result[value] = true
        end
    end

    return result
end

return fromArray

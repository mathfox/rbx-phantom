--!strict
--!native

local types = require(script.Parent.types)

type Set<T> = types.Set<T>

local function fromArray<T>(array: { T }): Set<T>
    local result = {} :: Set<T>

    for _, item in array do
        result[item] = true
    end

    return result
end

return fromArray

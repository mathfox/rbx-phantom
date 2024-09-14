--!strict
--!native
--!optimize 2

local function fromArray<TValue>(array: { TValue }): { [TValue]: true }
    local result: { [TValue]: true } = {}

    for _, value in array do
        result[value] = true
    end

    return result
end

return fromArray

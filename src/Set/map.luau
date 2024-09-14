--!strict
--!native
--!optimize 2

local function map<TValue, TOutput>(
    set: { [TValue]: true },
    mapper: (value: TValue, setRef: { [TValue]: true }) -> TOutput
): { [TOutput]: true }
    local result: { [TOutput]: true } = {}

    for key in set do
        local newKey = mapper(key, set)
        if newKey ~= nil then
            result[newKey] = true
        end
    end

    return result
end

return map

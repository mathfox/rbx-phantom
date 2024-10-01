--!strict
--!native
--!optimize 2

local None = require(script.Parent.Parent.None)

local function merge<TKey, TValue>(...: { [TKey]: TValue } | nil): { [TKey]: TValue }
    local result: { [TKey]: TValue } = {}

    for index = 1, select("#", ...) do
        local mapValue = select(index, ...)

        if mapValue ~= nil then
            for key, value in mapValue do
                result[key] = if value == None then nil else value
            end
        end
    end

    return result
end

return merge

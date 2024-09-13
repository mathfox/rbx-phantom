--!strict
--!native
--!optimize 2

local types = require(script.Parent.types)

local function delete<TValue>(set: types.Set<TValue>, ...: TValue | nil): types.Set<TValue>
    for index = 1, select("#", ...) do
        local value = select(index, ...)

        if value ~= nil then
            set[value] = nil
        end
    end

    return set
end

return delete

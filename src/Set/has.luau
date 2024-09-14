--!strict
--!native
--!optimize 2

local function has<TValue>(set: { [TValue]: true }, ...: TValue | nil): boolean
    for index = 1, select("#", ...) do
        local value = select(index, ...)

        if value ~= nil and not set[value] then
            return false
        end
    end

    return true
end

return has

--!strict
--!native
--!optimize 2

local function add<TValue>(set: { [TValue]: true }, ...: TValue | nil): { [TValue]: true }
    for index = 1, select("#", ...) do
        local value = select(index, ...)

        if value ~= nil then
            set[value] = true
        end
    end

    return set
end

return add

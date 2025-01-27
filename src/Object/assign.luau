--!strict
--!native
--!optimize 2

local function assign(target: { [unknown]: unknown }, ...): ()
    for index = 1, select("#", ...) do
        local source = select(index, ...)

        for key, value in source do
            target[key] = value
        end
    end
end

return assign

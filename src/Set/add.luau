--!strict
--!native

local types = require(script.Parent.types)

type Set<T> = types.Set<T>

local function add<T>(set: Set<T>, ...: T): Set<T>
    local size = select("#", ...)

    if size == 1 then
        set[select(1, ...)] = true
    elseif size == 2 then
        set[select(1, ...)] = true
        set[select(2, ...)] = true
    elseif size == 3 then
        set[select(1, ...)] = true
        set[select(2, ...)] = true
        set[select(3, ...)] = true
    elseif size == 4 then
        set[select(1, ...)] = true
        set[select(2, ...)] = true
        set[select(3, ...)] = true
        set[select(4, ...)] = true
    elseif size == 5 then
        set[select(1, ...)] = true
        set[select(2, ...)] = true
        set[select(3, ...)] = true
        set[select(4, ...)] = true
        set[select(5, ...)] = true
    else
        for index = 1, size do
            set[select(index, ...)] = true
        end
    end

    return set
end

return add

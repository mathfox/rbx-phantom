--!strict
--!native
--!optimize 2

local function strictEqual(...: unknown): boolean
    local firstValue = select(1, ...)

    for index = 2, select("#", ...) do
        if firstValue ~= select(index, ...) then
            return false
        end
    end

    return true
end

return strictEqual

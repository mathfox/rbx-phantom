--!strict
--!native
--!optimize 2

-- Checks whether all of the arguments are strict equal (==).
-- If no arguments were provided, returns `true`.
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

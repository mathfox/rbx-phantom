--!strict
--!native

local strictEqual = require(script.Parent.Parent.Util.strictEqual)

local function compare(a, b)
    if type(a) ~= "table" or type(b) ~= "table" then
        return a == b
    end

    local aLength = #a

    if #b ~= aLength then
        return false
    end

    for i = 1, aLength do
        if a[i] ~= b[i] then
            return false
        end
    end

    return true
end

local function equals<T>(...: { T }): boolean
    if strictEqual(...) then
        return true
    end

    local totalArgs = select("#", ...)
    local firstItem = select(1, ...)

    for i = 2, totalArgs do
        local item = select(i, ...)

        if not compare(firstItem, item) then
            return false
        end
    end

    return true
end

return equals

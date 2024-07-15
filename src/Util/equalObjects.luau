--!strict

local function equalObjects(...: any): boolean
    local firstItem = select(1, ...)

    for index = 2, select("#", ...) do
        if firstItem ~= select(index, ...) then
            return false
        end
    end

    return true
end

return equalObjects

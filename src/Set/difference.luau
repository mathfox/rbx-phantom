--!strict
--!native
--!optimize 2

--[[
    Returns a set of values that are in the first set, but not in the other sets.

    ```lua
    local set1 = { hello = true, world = true }
    local set2 = { cat = true, dog = true, hello = true }

    local diff = difference(set1, set2) -- { world = true }
    ```
]]
local function difference<TValue>(set: { [TValue]: true }, ...: { [TValue]: true } | nil): { [TValue]: true }
    local diff = table.clone(set)

    for index = 1, select("#", ...) do
        local otherSet = select(index, ...)

        if otherSet ~= nil then
            for value in otherSet :: { [TValue]: true } do
                diff[value] = nil
            end
        end
    end

    return diff
end

return difference

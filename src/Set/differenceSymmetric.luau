--!strict
--!native

local types = require(script.Parent.types)

type Set<T> = types.Set<T>

--[=[
    Returns a set of values that are in the first set, but not in the other sets, and vice versa.
    Simply speaking, this returns a unique entries in the sets provided.

    ```lua
    local set1 = { hello = true, world = true }
    local set2 = { cat = true, dog = true, hello = true }

    local diffSym = differenceSymmetric(set1, set2) -- { world = true, cat = true, dog = true }
    ```
]=]
local function differenceSymmetric(...: Set<unknown>): Set<unknown>
    local diff = table.clone(select(1, ...) :: Set<unknown>)

    for index = 2, select("#", ...) do
        local otherSet = select(index, ...) :: Set<unknown>

        for item in otherSet do
            diff[item] = (if diff[item] == nil then true else false) :: any
        end
    end

    for item, keep in diff do
        diff[item] = (if keep then true else nil) :: any
    end

    return diff
end

return differenceSymmetric

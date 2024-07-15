--!strict
--!native

local types = require(script.Parent.types)

type Set<T> = types.Set<T>

--[=[
    Returns a set of values that are in the first set, but not in the other sets, and vice versa.

    ```lua
    local set1 = { hello = true, world = true }
    local set2 = { cat = true, dog = true, hello = true }

    local diffSym = differenceSymmetric(set1, set2) -- { world = true, cat = true, dog = true }
    ```
]=]
local function differenceSymmetric(
    set: Set<unknown>,
    ...: Set<unknown>
): Set<unknown>
    local diff = table.clone(set)

    for _, nextSet in { ... } do
        if type(nextSet) ~= "table" then
            continue
        end

        for value in nextSet do
            diff[value] = if diff[value] == nil then true else false
        end
    end

    for value, keep in diff do
        diff[value] = if keep then true else nil
    end

    return diff
end

return differenceSymmetric

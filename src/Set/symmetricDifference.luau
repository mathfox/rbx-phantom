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

    local diffSym = symmetricDifference(set1, set2) -- { world = true, cat = true, dog = true }
    ```

    @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/symmetricDifference
]=]
local function symmetricDifference<T>(...: Set<T> | nil): Set<T>
    local diff = {}

    for index = 1, select("#", ...) do
        local set = select(index, ...)

        if set ~= nil then
            for value in set :: Set<unknown> do
                diff[value :: T] = (
                    if diff[value :: T] == nil then true else false
                ) :: any
            end
        end
    end

    for value, keep in diff do
        diff[value] = (if keep then true else nil) :: any
    end

    return diff
end

return symmetricDifference

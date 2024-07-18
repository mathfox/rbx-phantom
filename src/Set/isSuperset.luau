--!strict
--!native

local isSubset = require(script.Parent.isSubset)
local types = require(script.Parent.types)

type Set<T> = types.Set<T>

--[=[
    Checks whether a set is a superset of another set.

    ```lua
    local set = { hello = true, world = true }
    local subset = { hello = true }

    local isSuperset = IsSuperset(set, subset) -- true
    ```
]=]
local function isSuperset(superset: Set<unknown>, subset: Set<unknown>): boolean
    return isSubset(subset, superset)
end

return isSuperset

--!strict
--!native

local types = require(script.Parent.types)

type Set<T> = types.Set<T>

--[=[
    Checks whether a set is a subset of another set.

    ```lua
    local set = { hello = true, world = true }
    local subset = { hello = true }

    local is = isSubset(subset, set) -- true
    ```
]=]
local function isSubset(subset: Set<unknown>, superset: Set<unknown>): boolean
    for item in subset do
        if not superset[item] then
            return false
        end
    end

    return true
end

return isSubset

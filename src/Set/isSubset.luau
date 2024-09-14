--!strict
--!native
--!optimize 2

--[[
    Checks whether a set is a subset of another set.

    ```lua
    local set = { hello = true, world = true }
    local subset = { hello = true }

    local is = isSubset(subset, set) -- true
    ```
]]
local function isSubset(subset: { [unknown]: true }, superset: { [unknown]: true }): boolean
    for item in subset do
        if not superset[item] then
            return false
        end
    end

    return true
end

return isSubset

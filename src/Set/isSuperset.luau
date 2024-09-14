--!strict
--!native
--!optimize 2

--[[
    Checks whether a set is a superset of another set.

    ```lua
    local set = { hello = true, world = true }
    local subset = { hello = true }

    local is = isSuperset(set, subset) -- true
    ```
]]
local function isSuperset(superset: { [unknown]: true }, subset: { [unknown]: true }): boolean
    for item in subset do
        if not superset[item] then
            return false
        end
    end

    return true
end

return isSuperset

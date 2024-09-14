--!strict
--!native
--!optimize 2

local None = require(script.Parent.Parent.None)
local deepClone = require(script.Parent.Parent.Shared.deepClone)

--[[
	Merges the given maps into a single map. If the
	value is `None`, it will be removed from the result. This is
	recursive. The parameters may be any number of maps or
	`nil`. Non-maps will be ignored.

	```lua
	local map1 = { hello = "roblox", goodbye = { world = "goodbye" } }
	local map2 = { goodbye = { world = "world" } }

	local merged = deepMerge(map1, map2) -- { hello = "roblox", goodbye = { world = "world" } }
	```
]]
local function deepMerge<TKey, TValue>(...: { [TKey]: TValue } | nil): { [TKey]: TValue }
    local result: { [TKey]: TValue } = {}

    for index = 1, select("#", ...) do
        local mapValue = select(index, ...)

        if mapValue ~= nil then
            for key, value in mapValue do
                if value == None then
                    result[key] = nil
                elseif type(value) == "table" then
                    if result[key] == nil or type(result[key]) ~= "table" then
                        result[key] = deepClone(value) :: any
                    else
                        result[key] = deepMerge(result[key] :: any, value) :: any
                    end
                else
                    result[key] = value
                end
            end
        end
    end

    return result
end

return deepMerge

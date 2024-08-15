--!strict
--!native

local None = require(script.Parent.Parent.None)
local deepClone = require(script.Parent.Parent.Shared.deepClone)

--[=[

	Merges the given dictionaries into a single dictionary. If the
	value is `None`, it will be removed from the result. This is
	recursive. The parameters may be any number of dictionaries or
	`nil`. Non-dictonaries will be ignored.

	```lua
	local dictionary1 = { hello = "roblox", goodbye = { world = "goodbye" } }
	local dictionary2 = { goodbye = { world = "world" } }

	local merged = deepMerge(dictionary1, dictionary2) -- { hello = "roblox", goodbye = { world = "world" } }
	```
]=]
local function deepMerge<T>(...: any): T
    local result = {}

    for dictionaryIndex = 1, select("#", ...) do
        local dictionary = select(dictionaryIndex, ...)

        if type(dictionary) ~= "table" then
            continue
        end

        for key, value in pairs(dictionary) do
            if value == None then
                result[key] = nil
            elseif type(value) == "table" then
                if result[key] == nil or type(result[key]) ~= "table" then
                    result[key] = deepClone(value)
                else
                    result[key] = deepMerge(result[key], value)
                end
            else
                result[key] = value
            end
        end
    end

    return result
end

return deepMerge

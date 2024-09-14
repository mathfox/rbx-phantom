--!strict
--!native

local None = require(script.Parent.Parent.None)

--[[
    Merges the given dictionaries into a single dictionary.
    If the value is `None`, it will be removed from the result.
    The parameters may be any number of dictionaries or `nil`.
    Non-dictonaries will be ignored.

    ```lua
    local dictionary1 = { hello = "roblox", goodbye = "world" }
    local dictionary2 = { goodbye = "goodbye" }

    local merged = merge(dictionary1, dictionary2) -- { hello = "roblox", goodbye = "goodbye" }
    ```
]]
local function merge(...: any)
    local result = {}

    for dictionaryIndex = 1, select("#", ...) do
        local dictionary = select(dictionaryIndex, ...)

        if type(dictionary) ~= "table" then
            continue
        end

        for key, value in dictionary do
            result[key] = if value == None then nil else value
        end
    end

    return result
end

return merge

--!strict
--!native
--!optimize 2

--[[
    Flattens a map. If depth is not specified, it will flatten the map as far as it can go.

    ```lua
    local map = {
        hello = "world",
        goodbye = {
            world = "hello",
            roblox = {
                yes = "no",
                no = "yes",
            }
        }
    }

    local new = flatten(map) -- { hello = "world", world = "hello", yes = "no", no = "yes" }
    local new = flatten(map, 1) -- { hello = "world", world = "hello", roblox = { yes = "no", no = "yes" } }
    ```
]]
local function flatten<TKey, TValue>(map: { [TKey]: TValue }, depth: number?): { [TKey]: TValue }
    depth = if type(depth) == "number" then depth else math.huge

    local result: { [TKey]: TValue } = {}

    for key, value in map do
        if type(value) == "table" and depth > 0 then
            local nested = flatten(value, (depth :: number) - 1)

            for resultKey, resultValue in result do
                nested[resultKey :: any] = resultValue :: any
            end

            result = nested
        else
            result[key] = value
        end
    end

    return result
end

return flatten

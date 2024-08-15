--!strict
--!native

local types = require(script.Parent.types)

type Map<K, V> = types.Map<K, V>

--[[
  Flattens a dictionary. If depth is not specified, it will flatten the dictionary as far as it can go.

  ```lua
  local dictionary = {
    hello = "world",
    goodbye = {
      world = "hello",
      roblox = {
        yes = "no",
        no = "yes",
      }
    }
  }

  local new = flatten(dictionary) -- { hello = "world", world = "hello", yes = "no", no = "yes" }
  local new = flatten(dictionary, 1) -- { hello = "world", world = "hello", roblox = { yes = "no", no = "yes" } }
  ```
]]
local function flatten<K, V>(map: Map<K, V>, depth: number?): Map<K, V>
    depth = if type(depth) == "number" then depth else math.huge

    local result = {}

    for key, value in pairs(map) do
        if type(value) == "table" and depth > 0 then
            local nested = flatten(value, depth - 1)

            for resultKey, resultValue in pairs(result) do
                nested[resultKey] = resultValue
            end

            result = nested
        else
            result[key] = value
        end
    end

    return result
end

return flatten

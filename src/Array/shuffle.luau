--!strict
--!native

local types = require(script.Parent.types)

type Array<T> = types.Array<T>

--[[
	Randomises the order of the items in an array.

	```lua
	local array = { 1, 2, 3 }

	local new = shuffle(array) -- { 2, 3, 1 }
	```
]]
local function shuffle<T>(array: Array<T>): Array<T>
    local seed = math.modf(os.clock())
    local random = Random.new(seed)
    local result = table.clone(array)

    for index = #result, 1, -1 do
        local randomIndex = random:NextInteger(1, index)
        local temp = result[index]

        result[index] = result[randomIndex]
        result[randomIndex] = temp
    end

    return result
end

return shuffle

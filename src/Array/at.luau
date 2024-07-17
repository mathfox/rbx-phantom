--!strict
--!native

--[[
    @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at
]]
local function at<T>(array: { T }, index: number): T?
    return if index < 0 then array[index + 1 + #array] else array[index + 1]
end

return at

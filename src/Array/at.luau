--!strict

--[[
    @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at

    The difference is that index is 1-based.
]]
@native
local function at<T>(array: { T }, index: number): T?
    return if index < 1 then array[index + #array] else array[index]
end

return at

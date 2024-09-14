--!strict
--!native
--!optimize 2

--[[
    @param index 0-based index
    @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at
]]
local function at<TValue>(array: { TValue }, index: number): TValue | nil
    return if index < 0 then array[index + 1 + #array] else array[index + 1]
end

return at

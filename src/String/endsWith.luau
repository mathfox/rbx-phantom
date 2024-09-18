--!strict
--!native
--!optimize 2

local function endsWith(value: string, searchString: string, endPosition: number?): boolean
    local endIndex = if endPosition then endPosition + 1 else #value + 1

    return value:sub(endIndex - #searchString, endIndex - 1) == searchString
end

return endsWith

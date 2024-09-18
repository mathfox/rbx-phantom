--!strict
--!native
--!optimize 2

local function startsWith(value: string, searchString: string, position: number?): boolean
    local startIndex = if position then position + 1 else 1

    return value:sub(startIndex, startIndex - 1 + #searchString) == searchString
end

return startsWith

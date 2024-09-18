--!strict
--!native
--!optimize 2

local function trimStart(value: string): string
    return (value:gsub("^%s+", ""))
end

return trimStart

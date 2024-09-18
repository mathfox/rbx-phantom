--!strict
--!native
--!optimize 2

local function trimEnd(value: string): string
    return (value:gsub("%s+$", ""))
end

return trimEnd
